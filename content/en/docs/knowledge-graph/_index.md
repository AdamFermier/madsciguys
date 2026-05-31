---
title: "STEAM Knowledge Graph"
linktitle: "Knowledge Graph"
description: "A visual map of how Science, Technology, Engineering, Arts, and Mathematics interconnect across this site — showing nodes, edges, and the semantic relationships that form the STEAM knowledge graph."
weight: 5
menu: {main: {weight: 150}}
categories: ["Knowledge", "STEAM"]
tags: ["knowledge graph", "ontology", "concept map", "STEAM", "interdisciplinary"]
discipline: ["arts", "science", "engineering", "technology", "mathematics"]
persona: ["knowledge-manager", "design-researcher"]
related_concepts:
  - concept: "Knowledge Management"
    url: "/docs/4-arts/knowledge-management/"
    relationship: "theoretical-foundation"
  - concept: "Ontological Semantics"
    url: "/docs/4-arts/knowledge-management/ontological-semantics/"
    relationship: "theoretical-foundation"
  - concept: "Design Study Methodology"
    url: "/docs/4-arts/knowledge-management/design-study-methodology/"
    relationship: "methodology"
---

The knowledge graph below is the living map of this site. Every section is a **node**; every arrow is a named **edge** that explains *how* two areas of knowledge relate. This is the structural backbone behind the STEAM mission: not just five siloed disciplines, but an interconnected network where insights travel across boundaries.

## The STEAM Domain Graph

```plantuml
@startuml
!theme plain
skinparam defaultFontSize 13
skinparam rectangle {
  BackgroundColor #EBF5FB
  BorderColor #2980B9
  FontColor #1A252F
  RoundCorner 12
}
skinparam arrow {
  Color #2C3E50
  FontColor #555555
  FontSize 11
}
skinparam note {
  BackgroundColor #FEF9E7
  BorderColor #F39C12
}

title STEAM Knowledge Graph — MadSciGuys

rectangle "**Science**\nBiology · Chemistry\nPhysics · Medicine" as SCI
rectangle "**Technology**\nBiotech · Energy\nManufacturing · IoT" as TECH
rectangle "**Engineering**\nChemical · Civil\nElectrical · Aerospace" as ENG
rectangle "**Arts**\nKnowledge Mgmt\nPharm · Industry 4.0" as ARTS
rectangle "**Mathematics**\nPredictive Modeling\nData Science · ML" as MATH

SCI -right-> TECH : "enables"
TECH -right-> ENG : "implements"
ENG -up-> ARTS : "designed by"
ARTS -left-> MATH : "formalized by"
MATH -down-> SCI : "models"

SCI -[#9B59B6,dashed]-> MATH : "measured by"
ARTS -[#27AE60,dashed]-> TECH : "shapes UX of"
MATH -[#E67E22,dashed]-> TECH : "optimizes"
ENG -[#E74C3C,dashed]-> SCI : "applies"
ARTS -[#2980B9,dashed]-> SCI : "frames questions for"

@enduml
```

---

## Node Detail: What Each Domain Contains

```plantuml
@startuml
!theme plain
skinparam defaultFontSize 12
skinparam package {
  BackgroundColor #F8F9FA
  BorderColor #BDC3C7
}
skinparam class {
  BackgroundColor #EBF5FB
  BorderColor #2980B9
}

package "1 · Science" {
  class Biology {
    Molecular Biology
    Cell Biology
    Biochemistry
  }
  class Chemistry {
    Organic · Inorganic
    Physical · Analytical
  }
  class Physics {
    Quantum Mechanics
    Thermodynamics
    Cosmology
  }
  class Medicine {
    Internal Medicine
    Medical Genetics
    Immunology
  }
}

package "2 · Technology" {
  class BioTech
  class Energy
  class Manufacturing
  class Transportation
}

package "3 · Engineering" {
  class ChemicalEng as "Chemical Eng"
  class ElectricalEng as "Electrical Eng"
  class AerospaceEng as "Aerospace Eng"
  class ComputerEng as "Computer Eng"
}

package "4 · Arts" {
  class KnowledgeMgmt as "Knowledge Mgmt" {
    Ontological Semantics
    Design Study Method
    Taxonomy
  }
  class Pharma {
    Regulations (ICH)
    Scientific Method
    QbD / Control Strategy
  }
  class Industry40 as "Industry 4.0" {
    IoT · Big Data
    Cyber-Physical Systems
    Smart Factory
  }
}

package "5 · Mathematics" {
  class PredictiveModeling as "Predictive Modeling" {
    Data Science Lifecycle
    Feature Engineering
    Non-linear Regression
  }
}

@enduml
```

---

## Cross-Domain Relationship Map

The edges below show the named semantic relationships used across this site. These are the *types* of connections that form the knowledge graph structure.

```plantuml
@startuml
!theme plain
skinparam defaultFontSize 12
skinparam rectangle {
  BackgroundColor #FDFEFE
  BorderColor #85C1E9
  RoundCorner 8
}
skinparam arrow {
  FontSize 10
  Color #2C3E50
}

rectangle "Ontological Semantics" as ONT
rectangle "Knowledge Management" as KM
rectangle "Predictive Modeling" as PM
rectangle "Data Science Lifecycle" as DSL
rectangle "Industry 4.0" as I4
rectangle "Big Data" as BD
rectangle "Pharma / ICH QbD" as QBD
rectangle "Control Strategy" as CS
rectangle "S88 / S95 Standards" as S88
rectangle "Scientific Method" as SM
rectangle "Design Study Method" as DSM

KM -down-> ONT : "grounded in"
ONT -right-> KM : "structures"
PM -down-> DSL : "lifecycle of"
DSL -right-> BD : "requires"
BD -up-> I4 : "powers"
I4 -left-> S88 : "standardized by"
QBD -right-> CS : "produces"
QBD -down-> SM : "follows"
SM -left-> PM : "informs design of"
KM -[dashed]-> DSM : "evolved by"
DSM -[dashed]-> KM : "validates"
QBD -[dashed]-> ONT : "ontology alignment"
S88 -[dashed]-> ONT : "ontology alignment"

@enduml
```

---

## Relationship Edge Vocabulary

The knowledge graph uses a controlled vocabulary of edge types so relationships carry semantic meaning:

| Edge Type | Meaning | Example |
|-----------|---------|---------|
| `enables` | A makes B possible | Science enables Technology |
| `implements` | B builds on A's principles | Technology implements Engineering |
| `models` | Math describes phenomena in A | Mathematics models Science |
| `formalized by` | A gains rigor through B | Arts formalized by Mathematics |
| `grounded in` | A's theory derives from B | Knowledge Mgmt grounded in Ontological Semantics |
| `powers` | A provides data/energy for B | Big Data powers Industry 4.0 |
| `standardized by` | B defines A's vocabulary | Industry 4.0 standardized by S88/S95 |
| `follows` | A uses B's process | Pharma follows Scientific Method |
| `informs design of` | A shapes how B is constructed | Scientific Method informs Predictive Modeling |
| `evolved by` | B refines and extends A | Knowledge Mgmt evolved by Design Study Methodology |

---

## Personas in the Graph

Each [persona](/persona/) sits at a specific set of nodes and traverses particular edge types in their daily work:

| Persona | Primary Nodes | Key Traversals |
|---------|--------------|----------------|
| [Knowledge Manager](/persona/knowledge-manager/) | Knowledge Mgmt, Ontological Semantics, Design Study Method | grounded-in, evolved-by, structures |
| [Data Scientist](/persona/data-scientist/) | Predictive Modeling, Data Science Lifecycle, Big Data | lifecycle-of, requires, informs-design-of |
| [Pharma Product Developer](/persona/pharma-product-developer/) | Pharma/ICH, Control Strategy, Scientific Method | follows, produces, standardized-by |
| [Systems Integration Engineer](/persona/systems-integration-engineer/) | Industry 4.0, S88/S95, IoT, Cyber-Physical Systems | standardized-by, powers, implements |
| [Analytical Chemist](/persona/analytical-chemist/) | Chemistry, Biology, Pharma | enables, applies, models |
| [Theoretical Chemist](/persona/theoretical-chemist/) | Chemistry, Physics, Mathematics | models, formalized-by, enables |
| [Mathematician](/persona/mathematician/) | Mathematics, Predictive Modeling, Data Science | models, formalized-by, optimizes |
| [Design Researcher](/persona/design-researcher/) | Arts, Design Study Method, Knowledge Mgmt | evolved-by, frames-questions-for, shapes |
| [Creative Strategist](/persona/creative-strategist/) | Arts, Industry 4.0, Engineering | designed-by, shapes-UX-of, enables |

---

## How to Extend This Graph

Every page on this site can participate in the knowledge graph by adding `related_concepts` to its frontmatter:

```yaml
related_concepts:
  - concept: "Page Title"
    url: "/docs/path/to/page/"
    relationship: "grounded-in"   # use vocabulary from table above
```

New content authors should ask: *What does this page depend on? What does it enable? What formalizes it?* Those answers are the edges that grow the graph.
