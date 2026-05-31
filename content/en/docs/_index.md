---
title: STEAM
linkTitle: STEAM
menu: {main: {weight: 100}}
weight: 100
cascade: 
  type: "docs"
---

{{% alert title="Enabling the Digitally Savvy Future Scientists" color="dark" %}}
We are taking a bold step forward and looking to teach many how to embrace this digital transformation to drive the successful outcome your looking to achieve
{{% /alert%}}

<div class="-bg-primary p-3 display-6">Our Vision.</div>
<div class="-bg-200 p-3 display-10">

<p>

Our vision is to promote the integration of the arts (A) with the traditional STEM disciplines (Science, Technology, Engineering, Mathematics) to foster a more well-rounded, creative, and innovative approach to fundamental research and problem-solving.
</p>
</div>

<br>

<div class="-bg-primary p-3 display-6">Our Mission.</div>
<div class="-bg-200 p-3 display-10">
<p>

Our mission and current focus is to develop a knowledge graph associated with how STEM to STEAM framework should be setup and driven for teams interested in embracing conceptually.  

Explore the full graph: <a href="/docs/knowledge-graph/">STEAM Knowledge Graph &rarr;</a>
</p>

</div>

<br>

<div class="-bg-primary p-3 display-6">The Knowledge Graph.</div>
<div class="-bg-200 p-3 display-10">
<p>
The five STEAM domains are not isolated silos — they form an interconnected network where insights flow across boundaries. Each arrow below is a named relationship that explains <em>how</em> two domains connect.
</p>
</div>

```plantuml
@startuml
!theme plain
skinparam defaultFontSize 14
skinparam rectangle {
  BackgroundColor #EBF5FB
  BorderColor #2980B9
  FontColor #1A252F
  RoundCorner 14
}
skinparam arrow {
  Color #2C3E50
  FontColor #666666
  FontSize 12
}

rectangle "**Science**\nBiology · Chemistry\nPhysics · Medicine" as SCI
rectangle "**Technology**\nBiotech · Energy\nManufacturing · IoT" as TECH
rectangle "**Engineering**\nChemical · Civil\nElectrical · Aerospace" as ENG
rectangle "**Arts**\nKnowledge Mgmt\nPharma · Industry 4.0" as ARTS
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

