---
title: Cryptography
nav: cryptography
kicker: Secondary research line
description: Yaksha Cipher — auditable, hardware-aware symmetric encryption research under Rogue Intelligence.
permalink: /cryptography/
---

# Cryptography — Yaksha Cipher

<p class="lede">
  <strong>Yaksha Cipher（夜叉密码）</strong> is a <em>separate product line</em> from ValhallaBase:
  a Rust-centered symmetric encryption research stack emphasizing parameterized transforms,
  stateful AEAD, and — in the GPU-oriented line — auditable, hardware-adaptive throughput
  with reproducibility gates.
</p>

<div class="meta-row">
  <div class="meta-box"><span class="label">Priority</span><span class="value">Secondary</span></div>
  <div class="meta-box"><span class="label">SKU</span><span class="value">Yaksha Cipher</span></div>
  <div class="meta-box"><span class="label">Relation</span><span class="value">Stack sibling</span></div>
  <div class="meta-box"><span class="label">Stage</span><span class="value">Research / alpha</span></div>
</div>

<p class="toc">
  <a href="#role">Role</a>
  <a href="#capabilities">Capabilities</a>
  <a href="#honesty">Honesty</a>
  <a href="#zh">中文</a>
</p>

## Role in the laboratory {#role}

| | Valhalla (primary) | Yaksha (this page) |
|--|--------------------|--------------------|
| Job | Agent reliability runtime | Encryption substrate |
| Buyer narrative | State · abstain · recover | Auditability · throughput · sovereignty |
| Dependency | Optional LM decode | Independent crypto SKU |

Shared institutional home: Rogue Intelligence. Shared engineering authorship. **Distinct roadmaps** — do not evaluate Yaksha as “AI memory,” and do not evaluate Valhalla as “AES replacement.”

## Capabilities (public framing) {#capabilities}

From the library and investor-technical materials:

- **Core / parametric / neural-inspired modes** plus **AEAD** (`YakshaAead`) in the Rust crate surface  
- Research emphasis on **reproducible verification** (bit-exact / tagged gates) rather than badge theater  
- GPU-oriented adaptive-mask line aimed at high-throughput, sovereignty-sensitive data-in-motion  

<div class="callout">
  <strong>Positioning:</strong> infrastructure for auditable encryption under sovereign compute —
  not “another undifferentiated crypto crate” marketing claim, and not FIPS theater.
</div>

## Honest boundaries {#honesty}

<div class="notice">
  <ul>
    <li>Not presented here as FIPS / CAVP certified.</li>
    <li>Not claimed as a drop-in AES-GCM replacement for all production secrets <em>today</em>.</li>
    <li>Security claims require independent cryptanalysis; this page is a scientific index, not a certification.</li>
    <li>Proprietary research line — redistribution and production licensing by written arrangement.</li>
  </ul>
</div>

## Documents

- Monorepo: `valhalla-crypto/yaksha-cipher/`  
- Investor BP (authorized): `docs/YAKSHA_BP_EN_INVESTOR.md` / `docs/YAKSHA_BP_ZH_INVESTOR.md`  
- Primary product (for AI agents): [Valhalla]({{ '/valhalla/' | relative_url }})  

<div class="cta-row">
  <a class="btn" href="mailto:licensing@rogue-intelligence.com?subject=Yaksha%20Cipher">Cryptography contact</a>
  <a class="btn" href="{{ '/valhalla/' | relative_url }}">Back to Valhalla</a>
</div>

<div class="lang-block" id="zh">
  <div class="lang-label">中文</div>
  <p>
    <strong>夜叉密码（Yaksha Cipher）</strong>是实验室<strong>次线</strong>：与 ValhallaBase（AI 记忆/运行时）分 SKU。
    方向为可审计、面向硬件自适应的对称加密研究（含 AEAD 与 GPU 相关路线）。
    不作 FIPS/CAVP 宣称，不作「今日全面替代 AES-GCM」宣称。主线仍是
    <a href="{{ '/valhalla/' | relative_url }}">Valhalla</a>。
  </p>
</div>
