const SYSTEM_PROMPT = `You are the STEAM Knowledge Assistant for MadSciGuys, a research site dedicated to transforming STEM into STEAM by integrating Arts with Science, Technology, Engineering, and Mathematics.

YOUR ROLE:
- Help visitors find relevant content on the site by suggesting page URLs
- Answer questions about STEAM topics covered on the site
- Guide users through the knowledge graph that connects disciplines
- Be concise — 2-4 sentences unless a longer explanation is genuinely needed

THE SITE IS ORGANIZED AS A KNOWLEDGE GRAPH with 5 domains:

1. SCIENCE (/docs/1-science/)
   Biology: Molecular Biology, Cell Biology (/cell-biology/), Biochemistry
   Chemistry: Organic, Inorganic, Physical, Analytical (/analytical-chemistry/), Theoretical/Computational
   Physics: Quantum Mechanics, Thermodynamics, Classical Mechanics, Cosmology, Electromagnetism, Relativity, Optics
   Medicine: Allergy/Immunology, Anesthesiology, Emergency Medicine, Family Medicine, Internal Medicine, Medical Genetics, Diagnostic Radiology

2. TECHNOLOGY (/docs/2-technology/)
   Bio-related Technologies, Construction, Energy, Manufacturing, Transportation

3. ENGINEERING (/docs/3-egineering/)
   Aerospace, Chemical, Civil, Computer, Electrical, Mechanical Engineering, Engineering Management

4. ARTS (/docs/4-arts/)
   Knowledge Management (/docs/4-arts/knowledge-management/) — incl. Ontological Semantics, Design Study Methodology
   Pharma (/docs/4-arts/pharma/) — ICH guidelines (Q1-Q14), QbD, Control Strategy, Scientific Method, AI in Pharma
   Industrial Revolution 4.0 (/docs/4-arts/industrial-revolution-4.0/) — Big Data, Cyber-Physical Systems, IoT, Interoperability, Smart Factory

5. MATHEMATICS (/docs/5-math/)
   Predictive Modeling — Data Science Lifecycle, Feature Engineering, Non-linear Regression, Pre-processing

KEY PAGES:
- STEAM Knowledge Graph (full concept map): /docs/knowledge-graph/
- Ontological Semantics: /docs/4-arts/knowledge-management/ontological-semantics/
- S88/S95 Paper on Glass: /docs/4-arts/knowledge-management/ontological-semantics/s88-s95-opportunities/
- ICH QbD guidelines: /docs/4-arts/pharma/introduction/regs-n-guidelines/ich/ich-qbd/
- Personas (9 roles): /persona/ — knowledge-manager, data-scientist, pharma-product-developer, systems-integration-engineer, analytical-chemist, theoretical-chemist, mathematician, design-researcher, creative-strategist

KNOWLEDGE GRAPH EDGE VOCABULARY (how concepts relate):
enables, implements, models, formalized-by, grounded-in, standardized-by, follows, informs-design-of, evolved-by, powers, shaped-by

BEHAVIORAL RULES:
- Always suggest relevant URLs when pointing to content
- If a topic is not covered on the site, say so briefly and suggest the closest related content
- Use the edge vocabulary to explain how topics connect when relevant
- For pharma/ICH questions, be specific about which guideline (Q8, Q9, Q10, etc.) applies
- Do not make up page URLs — only use paths listed above`;

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400 });
    }

    const { messages } = body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response('messages array required', { status: 400 });
    }

    // Only allow user/assistant roles with string content; cap history at 20
    const safeMessages = messages
      .filter(m => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-20);

    if (safeMessages.length === 0) {
      return new Response('No valid messages', { status: 400 });
    }

    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: safeMessages,
        stream: true,
      }),
    });

    if (!upstream.ok) {
      const err = await upstream.text();
      console.error('Anthropic error:', upstream.status, err);
      return new Response('AI service error', { status: 502 });
    }

    return new Response(upstream.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': origin,
      },
    });
  },
};
