---
title: "Ontological Semantics"
description: "A theory of meaning in natural language and an approach to NLP that uses a constructed world model — an ontology — as a central resource for extracting, representing, and reasoning about knowledge derived from natural language texts."
categories: ["Knowledge", "Research"]
tags: ["ontology", "semantics", "NLP", "LLM", "knowledge graph", "knowledge representation"]
discipline: ["arts", "science"]
persona: ["knowledge-manager", "design-researcher"]
related_concepts:
  - concept: "Knowledge Management"
    url: "/docs/4-arts/knowledge-management/"
    relationship: "grounded-in"
  - concept: "STEAM Knowledge Graph"
    url: "/docs/knowledge-graph/"
    relationship: "theoretical-foundation"
  - concept: "S88/S95 Paper on Glass"
    url: "/docs/4-arts/knowledge-management/ontological-semantics/s88-s95-opportunities/"
    relationship: "applied-in"
  - concept: "Pharma AI"
    url: "/docs/4-arts/pharma/introduction/ai/"
    relationship: "enables"
---

## Architecture of Ontological Semantics

The key components required to build a knowledge framework leveraging Ontological Semantics — the theoretical grounding that has enabled the current field of Large Language Models — which help us create knowledge out of existing sources in a systematic manner.

```plantuml
@startuml
!theme plain
skinparam defaultFontSize 13
skinparam component {
  BackgroundColor #EBF5FB
  BorderColor #2980B9
  FontColor #1A252F
  RoundCorner 10
}
skinparam database {
  BackgroundColor #FEF9E7
  BorderColor #F39C12
}
skinparam rectangle {
  BackgroundColor #EAFAF1
  BorderColor #27AE60
  RoundCorner 8
}
skinparam arrow {
  Color #2C3E50
  FontColor #555
  FontSize 11
}

title Architecture of Ontological Semantics

package "Static Knowledge Sources" {
  database "Ontology\n(World Model)" as ONT
  database "Fact Repository\n(Domain Facts)" as FACT
  database "Lexicon\n(Word Forms & Meanings)" as LEX
  database "Onomasticon\n(Named Entities)" as ONOM
}

component "Knowledge Representation\nLanguage" as KRL

rectangle "Semantic Analyzer\n(Large Language Model)" as LLM

rectangle "Use Cases" as UC {
  component "Text Summarization" as TS
  component "Question & Answering" as QA
  component "AI Agents" as AG
}

ONT --> KRL : "defines concepts"
FACT --> KRL : "instantiates"
LEX --> KRL : "maps words → meaning"
ONOM --> KRL : "resolves named entities"

KRL --> LLM : "structured meaning\nrepresentation"

LLM --> TS
LLM --> QA
LLM --> AG
@enduml
```

---

## The Four Static Knowledge Sources

### Ontology — the World Model
The ontology defines the concepts that exist in a domain and the relationships between them. It is the **schema** of the knowledge graph: what nodes (concepts) and edge types (relationships) are valid. Without an ontology, a knowledge base is just a bag of facts with no shared meaning.

### Fact Repository
Stores instantiated knowledge — specific, asserted facts about the world derived from texts, experiments, or expert input. Facts are the **populated rows** of the ontology's schema.

### Lexicon
Maps surface word forms to their semantic meanings. A lexicon allows the system to recognize that "kinase inhibitor," "enzyme blocker," and "phosphorylation suppressor" may all refer to the same ontological concept, enabling robust natural language understanding across varied terminology.

### Onomasticon
A specialized lexicon for named entities: people, organizations, places, products, and standards (e.g., "ICH Q10," "S88," "FDA"). The onomasticon lets the system resolve ambiguous proper nouns to canonical knowledge graph nodes.

---

## Knowledge Representation Language

The Knowledge Representation Language (KRL) is the formal grammar that ties the four sources together. It allows a system to derive *meaning* from raw text by:

1. Parsing surface language through the Lexicon
2. Resolving named entities through the Onomasticon
3. Grounding concepts against the Ontology
4. Asserting new facts into the Fact Repository

This pipeline is what transforms unstructured text into structured, queryable knowledge graph entries.

---

## Semantic Analyzer — Large Language Models

The Semantic Analyzer uses the KRL-structured knowledge to drive user-facing interactions. Modern LLMs play this role, but a key distinction applies:

```plantuml
@startuml
!theme plain
skinparam defaultFontSize 13
skinparam rectangle {
  RoundCorner 10
  FontColor white
}

rectangle "**Black Box LLM**\n(no visible ontology)\n\nGenerates answers\nCannot explain reasoning\nKnowledge is opaque" as BB #C0392B
rectangle "**Glass Box (Ontological Semantics)**\n(explicit ontology + fact repository)\n\nGenerates answers\nCan cite sources\nKnowledge is auditable" as GB #27AE60

BB -right[hidden]-> GB
note bottom of BB : Hallucination risk\nLow traceability
note bottom of GB : Ontology-grounded\nHigh explainability
@enduml
```

The **Glass Box** advantage is critical in regulated domains like pharma, manufacturing, and clinical research — where every knowledge claim must be traceable to its source.

---

## Supported Use Cases

| Use Case | How Ontological Semantics Helps |
|----------|--------------------------------|
| **Text Summarization** | Extracts key ontology nodes and relationships from documents, producing summaries that preserve semantic fidelity |
| **Question & Answering** | Grounds answers in the Fact Repository and Ontology rather than statistical patterns alone |
| **AI Agents** | Agents navigate the knowledge graph to plan multi-step reasoning, with each hop traceable to an ontology edge |
| **Ontology Alignment** | Maps domain-specific standards (S88, S95, ICH) to a shared ontology for interoperability |

---

## Applied Example: This Site's Taxonomy as an Ontology

The STEAM knowledge graph on this site is itself an instance of ontological semantics in practice:

- **Ontology nodes**: Science, Technology, Engineering, Arts, Mathematics
- **Ontology edges**: `enables`, `implements`, `models`, `formalized by`, `grounded in`
- **Lexicon**: tags and categories on each page
- **Onomasticon**: persona names, standard names (ICH, S88, S95)
- **Fact Repository**: each page's `related_concepts` frontmatter

See the full graph: [STEAM Knowledge Graph →](/docs/knowledge-graph/)
