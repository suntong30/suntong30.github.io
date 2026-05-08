---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
/* 全局文本颜色 */
body {
  color: #333; /* 主要文本颜色 */
} 
.pubtitle{
    background: #BD666D;
    color: white;
    font-size: 13.5px;
    padding: 1px 5px 1px 5px;
    border-radius: 10px;
    float: left;
    font-weight: bold;
/*     display: inline-block; */
}
.font-bold{
    font-weight:bold;
}

.highlight-label {
  display: inline-block;
  padding: 3px 6px;  /* 两边各留6px的宽度 */
  border-radius: 5px;
  color: #FFD700; /* 金色字体 */
  font-size: 0.9em;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 3px;
  text-align: center;
  white-space: nowrap; /* 防止文本换行，确保宽度根据文本长度调整 */
}

.highlight-x {
  background-color: #1A1A1A;
}
</style>

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, I'm currently a fourth-year PhD Student in the [College of Computer Science and Technology](http://www.cs.zju.edu.cn/) at [Zhejiang University (ZJU)](https://www.zju.edu.cn), and expected to get the PhD degree in 2027. I'm co-advised by [Prof. Wei Dong (董玮)](https://dongw.emnets.cn/) and [Prof. Yi Gao (高艺)](https://person.zju.edu.cn/gaoyi). I work closely with [Prof. Borui Li (李博睿)](https://www.liborui.cn/)  and [Prof. Jiamei Lv (吕嘉美)](https://lvjiamei.github.io/). Prior to that, I received my B.E. degree from the [School of Electronics and Information Engineering](https://elec.hdu.edu.cn/ele_en/main.htm) in [Hangzhou Dianzi University (HDU)](https://en.hdu.edu.cn/main.htm), Hangzhou, 2022, advised by [Prof. Long Chen (陈龙)](https://faculty.hdu.edu.cn/dzxxxy/cl2_17828/main.htm). 

I work on **systems and security for AIoT**, with a focus on **system software for confidential computing in IoT**.  

**Research Overview:**

I’m currently working on the following directions:
- **Generative safe OS with confidential computing support for IoT** — Toward automatically constructing a secure-by-default OS and toolchain for TEE-enabled IoT devices.
  - **LLM-assisted secure application development:** frameworks that help developers build TEE-based secure IoT applications correctly.
    - [[IPSN'24, dTEE]](https://ieeexplore.ieee.org/document/10577323)

- **Real-time, cloud–edge–end collaborative confidential AI inference** — Key techniques for low-latency and privacy-preserving inference on IoT devices with TEE support.
  - [[CCS'25, TensorShield]](https://dl.acm.org/doi/10.1145/3719027.3744798)
  - [[ICML'26, RTInfer]]()

I used to work on (and still build upon) the following topics:
- **Delta compression / differencing algorithms for software updates**
    - **Container Deduplication:** [[ATC'24, SimEnc]](https://www.usenix.org/conference/atc24/presentation/sun), [[TOS'25, SimEnc+]](https://dl.acm.org/doi/10.1145/3725220)
    - **Mobile APP updates:** [[TMC'26, EncDiffPatch]](), [[TMC'24, sdiff]](https://ieeexplore.ieee.org/document/10543054), [[INFOCOM'24, MDiffPatch]](https://www.emnets.cn/zh/publication/infocom-24-mdiffpatch/mdiffpatch.pdf)

**E-mail:** <tongsun 🤯 zju [dot] edu [dot] cn> & <asckw30 🤯 gmail [dot] com>

**Our Lab:**  [ <font color='orange'> EmNets research group</font>](https://www.emnets.cn/) 

# 🔥 News

<div style="max-height: 350px; overflow-y: auto; padding: 20px; background: rgba(243, 232, 256, 0.4); border-left: 4px solid #2c3e50; margin: 0px 0;">
<style>
  div::-webkit-scrollbar {
    width: 8px;
  }
  div::-webkit-scrollbar-track {
    background: #e9ecef;
    border-radius: 4px;
  }
  div::-webkit-scrollbar-thumb {
    background: #2c3e50;
    border-radius: 4px;
  }
  div::-webkit-scrollbar-thumb:hover {
    background: #1a252f;
  }
  div {
    scrollbar-width: thin;
    scrollbar-color: #2c3e50 #e9ecef;
  }
</style>
<ul style="list-style-type: none; padding-left: 0; margin: 0;">
  <li><em>2026.05:</em> 😃 Our work <strong>RTInfer</strong> is <b><font color="blue">accepted</font></b> to <strong>ICML 2026</strong>, congrats to Renjie! See you in Seoul.</li>
  <li><em>2026.04:</em> 😃 Invited to serve on the <b><font color="blue">AEC</font></b> of <strong>USENIX OSDI 2026</strong>.</li>
  <li><em>2026.04:</em> 😃 Invited to serve on the <b><font color="blue">AEC</font></b> of <strong>ACM CCS 2026</strong>.</li>
  <li><em>2026.04:</em> 😃 Our work <strong>EncDiffPatch</strong> is <b><font color="blue">accepted</font></b> to <strong>IEEE Transactions on Mobile Computing</strong>, congrats to Lewei!</li>
  <li><em>2025.12:</em> 🏆 Selected into the China Association for Science and Technology (CAST) Youth Talent Support Program for PhD Students <b><font color="blue"> 中国科协青年科技人才培育工程博士生专项计划</font></b> !</li>
  <li><em>2025.12:</em> 🏆 Received funding from the National Natural Science Foundation of China (NSFC) under the Youth Student Basic Research Program<b><font color="blue"> 国家自然科学基金博士生基金</font></b> !</li>
  <li><em>2025.11:</em> 😃 Invited to serve on the <b><font color="blue">AEC</font></b> of <strong>USENIX Security 2026</strong>.</li>
  <li><em>2025.08:</em> 😃 Invited to serve on the <b><font color="blue">AEC</font></b> of <strong>IEEE S&P (Oakland) 2026</strong>.</li>
  <li><em>2025.06:</em> 😃 Invited to serve on the <b><font color="blue">Shadow PC</font></b> of <strong>ACM EuroSys 2026</strong>.</li>
  <li><em>2025.05:</em> 😃 Invited to serve on the <b><font color="blue">AEC</font></b> of <strong>ACM CCS 2025</strong>.</li>
  <li><em>2025.05:</em> 🎉🎉 Our work <strong>TensorShield</strong> is <b><font color="blue">accepted</font></b> to <strong>ACM CCS 2025</strong>. Thanks to all collaborators! See you in Taipei.</li> 
  <li><em>2025.05:</em> 😃 Invited to serve on the <b><font color="blue">AEC</font></b> of <strong>USENIX FAST 2026</strong>.</li>
  <li><em>2025.05:</em> 😃 Invited to serve on the <b><font color="blue">TPC</font></b> of <strong>IEEE DIKW 2025</strong>.</li>
  <li><em>2025.05:</em> 😃 Invited to be the reviewer of <strong>International Journal of Data Science and Analytics</strong>.</li>
  <li><em>2025.04:</em> 😃 Invited to serve on the <b><font color="blue">AEC</font></b> of <strong>USENIX OSDI 2025</strong> and <strong>USENIX ATC 2025</strong>.</li>
  <li><em>2025.03:</em> 🎉🎉 Our work <strong>SimEnc</strong> is selected as one of the <b><font color="#C00000">Best Storage Related Papers (3/77≈3.9%)</font></b> of USENIX ATC'24 for fast-track publication in <strong>ACM Transactions on Storage</strong>. Thanks to all collaborators!</li>
  <li><em>2025.02:</em> 😃 Invited to be the reviewer of <strong>The Journal of Supercomputing</strong>. </li>
  <li><em>2024.11:</em> 🏆 Received the <b><font color="blue">2024 National Scholarship</font></b>!</li>
  <li><em>2024.09:</em> 😃 Invited to be the reviewer of <strong>IEEE HPCC 2024</strong>. </li>
  <li><em>2024.09:</em> 😃 Invited to be the reviewer of <strong>IEEE Transactions on Knowledge and Data Engineering</strong>.</li>
  <li><em>2024.05:</em> 🎉🎉 Our work <strong>sdiff</strong> is <b><font color="blue">accepted</font></b> to <strong>IEEE Transactions on Mobile Computing</strong>. Thanks to all collaborators!</li>
  <li><em>2024.05:</em> 🎉🎉 Our work <strong>SimEnc</strong> is <b><font color="blue">accepted</font></b> to <strong>USENIX ATC 2024</strong>. Thanks to all collaborators! See you in Santa Clara.</li>
  <li><em>2024.01:</em> 🎉🎉 Our work <strong>dTEE</strong> is <b><font color="blue">accepted</font></b> to <strong>ACM/IEEE IPSN 2024</strong>. Thanks to all collaborators! See you in Hong Kong.</li>
  <li><em>2023.12:</em> 😃 Our work <strong>MDiffPatch</strong> is <b><font color="blue">accepted</font></b> to <strong>IEEE INFOCOM 2024</strong>, congrats to Lewei!</li>
</ul>
</div>
  
# 📝 Publications 
<p class="publication-note">(*Corresponding Author)</p>
<p class="publication-note publication-rank-note"><b>[CCF] <a href="https://www.ccf.org.cn/Academic_Evaluation/By_category/">China Computer Federation Ranking</a>; [TH-CPL] <a href="https://numbda.cs.tsinghua.edu.cn/~yuwj/TH-CPL.pdf">Tsinghua-Computer Science Preferred List</a>; [CORE] <a href="https://portal.core.edu.au/conf-ranks/">CORE Conference Ranking</a></b></p>

## 2026
<div class="publication-list">
  <article class="publication-card publication-card--chinese-journal">
    <div class="publication-card__header">
      <span class="publication-venue">CCCF'26</span>
      <div class="publication-links">
        <span>paper</span>
        <span>web</span>
      </div>
    </div>
    <h3 class="publication-title"><span class="publication-id">[J4]</span> 物联网机密感知计算</h3>
    <p class="publication-authors">董玮, <strong class="publication-me">孙桐</strong>, 吕嘉美, 陈纯.</p>
    <p class="publication-meta"><em>Computing Magazine of the CCF（中国计算机学会通讯《计算》）</em>.</p>
  </article>
  
  <article class="publication-card">
    <div class="publication-card__header">
      <span class="publication-venue">ICML'26</span>
      <div class="publication-links">
        <span>paper</span>
        <span>web</span>
        <span>code</span>
      </div>
    </div>
    <h3 class="publication-title"><span class="publication-id">[C5]</span> RTInfer: Exploiting Concurrency for Multiple Real-Time DNN Inference on Edge GPUs</h3>
    <p class="publication-authors">Renjie Li, <strong class="publication-me">Tong Sun</strong>, Yi Gao, and Wei Dong.</p>
    <p class="publication-meta"><em>Forty-third International Conference on Machine Learning (ICML), Seoul, South Korea. July 6-11, 2026</em>.</p>
    <p class="publication-meta">Acceptance Rate: 26.6% (6352 out of 23918).</p>
    <div class="publication-ranks">
      <span class="publication-rank">CCF-A.</span>
      <span class="publication-rank">THCPL-A.</span>
      <span class="publication-rank">CORE A*.</span>
    </div>
  </article>

  <article class="publication-card publication-card--journal">
    <div class="publication-card__header">
      <span class="publication-venue">IEEE TMC'26</span>
      <div class="publication-links">
        <a href="https://ieeexplore.ieee.org/abstract/document/11482743">paper</a>
        <a href="https://ieeexplore.ieee.org/abstract/document/11482743">web</a>
      </div>
    </div>
    <h3 class="publication-title"><span class="publication-id">[J3]</span> Efficient Incremental Updates for Encrypted Mobile Apps</h3>
    <p class="publication-authors">Lewei Jin, Kui Zhang, <strong class="publication-me">Tong Sun</strong>, Jiamei Lv, Yi Gao, and Wei Dong*.</p>
    <p class="publication-meta"><em>IEEE Transactions on Mobile Computing (TMC)</em>.</p>
    <p class="publication-meta">IF=9.2(2025), JCR Q1.</p>
    <div class="publication-ranks">
      <span class="publication-rank">CCF-A.</span>
      <span class="publication-rank">THCPL-A.</span>
    </div>
  </article>
</div>

## 2025
<div class="publication-list">
  <article class="publication-card">
    <div class="publication-card__header">
      <span class="publication-venue">ACM CCS'25</span>
      <div class="publication-links">
        <a href="https://dl.acm.org/doi/10.1145/3719027.3744798">paper</a>
        <a href="https://dl.acm.org/doi/10.1145/3719027.3744798">web</a>
        <a href="https://github.com/suntong30/TensorShield">code</a>
        <span>slides</span>
      </div>
    </div>
    <h3 class="publication-title"><span class="publication-id">[C4]</span> TensorShield: Safeguarding On-Device Inference by Shielding Critical DNN Tensors with TEE</h3>
    <p class="publication-authors"><strong class="publication-me">Tong Sun</strong>, Bowen Jiang, Hailong Lin, Borui Li, Yixiao Teng, Yi Gao, and Wei Dong*.</p>
    <p class="publication-meta"><em>Proceedings of ACM Conference on Computer and Communications Security (CCS), October 13-17, 2025</em>.</p>
    <p class="publication-meta">Acceptance Rate: Cycle A 12.5% (102 out of 816), Cycle A AI sec track 11.8% (24 out of 204).</p>
    <div class="publication-ranks">
      <span class="publication-rank">CCF-A.</span>
      <span class="publication-rank">THCPL-A.</span>
      <span class="publication-rank">CORE A*.</span>
    </div>
    <div class="publication-badges">
      <a href="https://github.com/suntong30/TensorShield"><img src="https://img.shields.io/github/stars/suntong30/TensorShield?style=social&amp;label=Code+Stars" alt="TensorShield Code Stars"></a>
      <img src="/images/available.png" alt="Artifact Available">
      <img src="/images/functional.png" alt="Artifact Functional">
      <img src="/images/reproduced.png" alt="Artifact Reproduced">
    </div>
  </article>

  <article class="publication-card publication-card--journal">
    <div class="publication-card__header">
      <span class="publication-venue">ACM TOS'25</span>
      <div class="publication-links">
        <a href="https://suntong30.github.io/assets/pdf/TOS25_Exploiting_Multiple_Similarity_Spaces_for_Deduplication_of_Encrypted_Container_Images.pdf">paper</a>
        <a href="https://dl.acm.org/doi/10.1145/3725220">web</a>
        <a href="https://github.com/suntong30/SimEnc">code</a>
      </div>
    </div>
    <h3 class="publication-title"><span class="publication-id">[J2]</span> <a href="https://dl.acm.org/doi/10.1145/3725220">Exploiting Multiple Similarity Spaces for Deduplication of Encrypted Container Images</a></h3>
    <p class="publication-authors"><strong class="publication-me">Tong Sun</strong>, Bowen Jiang, Borui Li, Jiamei Lv, Yi Gao*, and Wei Dong*.</p>
    <p class="publication-meta"><em>ACM Transactions on Storage (TOS)</em>.</p>
    <div class="publication-ranks">
      <span class="publication-rank">CCF-A.</span>
      <span class="publication-rank">THCPL-A.</span>
    </div>
    <div class="publication-badges">
      <a href="https://github.com/suntong30/SimEnc"><img src="https://img.shields.io/github/stars/suntong30/SimEnc?style=social&amp;label=Code+Stars" alt="SimEnc Code Stars"></a>
    </div>
  </article>
</div>

## 2024
<div class="publication-list">
  <article class="publication-card">
    <div class="publication-card__header">
      <span class="publication-venue">USENIX ATC'24</span>
      <div class="publication-links">
        <a href="https://suntong30.github.io/assets/pdf/atc24-sun.pdf">paper</a>
        <a href="https://www.usenix.org/conference/atc24/presentation/sun">web</a>
        <a href="https://github.com/suntong30/SimEnc">code</a>
        <a href="https://suntong30.github.io/assets/pdf/ATC24_SimEnc_slides.pdf">slides</a>
        <a href="https://www.youtube.com/watch?v=o6YZbeAey0k">video</a>
      </div>
    </div>
    <h3 class="publication-title"><span class="publication-id">[C3]</span> <a href="https://www.usenix.org/conference/atc24/presentation/sun">SimEnc: A High-Performance Similarity-Preserving Encryption Approach for Deduplication of Encrypted Docker Images</a></h3>
    <p class="publication-authors"><strong class="publication-me">Tong Sun</strong>, Bowen Jiang, Borui Li, Jiamei Lv, Yi Gao*, and Wei Dong*.</p>
    <p class="publication-meta"><em>Proceedings of the 2024 USENIX Annual Technical Conference (USENIX ATC), Santa Clara, CA, USA. July 10–12</em>.</p>
    <p class="publication-meta">Acceptance Rate: 15.8% (77 out of 488). <strong class="publication-award">Best Storage Related Paper (3/77)</strong></p>
    <div class="publication-ranks">
      <span class="publication-rank">CCF-A.</span>
      <span class="publication-rank">THCPL-A.</span>
      <span class="publication-rank">CORE A.</span>
      <span class="publication-award-pill">Best Storage Related Paper</span>
    </div>
    <div class="publication-badges">
      <a href="https://github.com/suntong30/SimEnc"><img src="https://img.shields.io/github/stars/suntong30/SimEnc?style=social&amp;label=Code+Stars" alt="SimEnc Code Stars"></a>
      <img src="/images/usenixbadges-available.png" alt="USENIX Artifact Available">
      <img src="/images/usenixbadges-functional.png" alt="USENIX Artifact Functional">
    </div>
  </article>
  
  <article class="publication-card publication-card--journal">
    <div class="publication-card__header">
      <span class="publication-venue">IEEE TMC'24</span>
      <div class="publication-links">
        <a href="https://suntong30.github.io/assets/pdf/TMC24_sdiff.pdf">paper</a>
        <a href="https://ieeexplore.ieee.org/document/10543054">web</a>
        <a href="https://github.com/suntong30/sdiff">code</a>
      </div>
    </div>
    <h3 class="publication-title"><span class="publication-id">[J1]</span> <a href="https://ieeexplore.ieee.org/document/10543054">Understanding Differencing Algorithms for Mobile Application Updates</a></h3>
    <p class="publication-authors"><strong class="publication-me">Tong Sun</strong>, Bowen Jiang, Lewei Jin, Wenzhao Zhang, Yi Gao, Zhendong Li, and Wei Dong*.</p>
    <p class="publication-meta"><em>IEEE Transactions on Mobile Computing (TMC)</em>.</p>
    <p class="publication-meta">IF=9.2(2025), JCR Q1.</p>
    <div class="publication-ranks">
      <span class="publication-rank">CCF-A.</span>
      <span class="publication-rank">THCPL-A.</span>
    </div>
    <div class="publication-badges">
      <a href="https://github.com/suntong30/sdiff"><img src="https://img.shields.io/github/stars/suntong30/sdiff?style=social&amp;label=Code+Stars" alt="sdiff Code Stars"></a>
    </div>
  </article>

  <article class="publication-card">
    <div class="publication-card__header">
      <span class="publication-venue">ACM/IEEE IPSN'24</span>
      <div class="publication-links">
        <a href="https://suntong30.github.io/assets/pdf/IPSN24_dTEE.pdf">paper</a>
        <a href="https://ieeexplore.ieee.org/document/10577323">web</a>
        <a href="https://suntong30.github.io/assets/pdf/IPSN24_dTEE_slides.pdf">slides</a>
      </div>
    </div>
    <h3 class="publication-title"><span class="publication-id">[C2]</span> <a href="https://ieeexplore.ieee.org/document/10577323">dTEE: A Declarative Approach to Secure IoT Applications Using TrustZone</a></h3>
    <p class="publication-authors"><strong class="publication-me">Tong Sun</strong>, Borui Li, Yixiao Teng, Yi Gao, and Wei Dong*.</p>
    <p class="publication-meta"><em>Proceedings of the 23rd ACM/IEEE Conference on Information Processing in Sensor Networks (IPSN), Hong Kong, China. May 13-16</em>.</p>
    <p class="publication-meta">Acceptance Rate: 21.5% (20 out of 93).</p>
    <div class="publication-ranks">
      <span class="publication-rank">CCF-B.</span>
      <span class="publication-rank">THCPL-A.</span>
      <span class="publication-rank">CORE A*.</span>
    </div>
  </article>

  <article class="publication-card">
    <div class="publication-card__header">
      <span class="publication-venue">IEEE INFOCOM'24</span>
      <div class="publication-links">
        <a href="https://suntong30.github.io/assets/pdf/INFOCOM24_MDiffPatch.pdf">paper</a>
        <a href="https://ieeexplore.ieee.org/document/10621326">web</a>
      </div>
    </div>
    <h3 class="publication-title"><span class="publication-id">[C1]</span> <a href="https://ieeexplore.ieee.org/document/10621326">Exploiting Multiple Similarity Spaces for Efficient and Flexible Incremental Update of Mobile Apps</a></h3>
    <p class="publication-authors">Lewei Jin, Wei Dong*, Bowen Jiang, <strong class="publication-me">Tong Sun</strong>, and Yi Gao*.</p>
    <p class="publication-meta"><em>Proceedings of IEEE Conference on Computer Communications (INFOCOM), Vancouver, Canada. May 20-23</em>.</p>
    <p class="publication-meta">Acceptance Rate: 19.6% (256 out of 1307).</p>
    <div class="publication-ranks">
      <span class="publication-rank">CCF-A.</span>
      <span class="publication-rank">THCPL-A.</span>
      <span class="publication-rank">CORE A*.</span>
    </div>
  </article>
</div>

# 🔍 Academic Services
- **Technical Program Committee**: ACM EuroSys 2026 (Shadow), IEEE DIKW 2025
- **Program Committee for Artifact Evaluation**: USENIX OSDI 2025-2026, USENIX ATC 2025, USENIX FAST 2026, IEEE S&P 2026, ACM CCS 2025-2026, USENIX Security 2026
- **Journal Reviewer**: IEEE Transactions on Knowledge and Data Engineering (TKDE), ACM Transactions on Internet of Things (TIOT), The Journal of Supercomputing (TJS), International Journal of Data Science and Analytics (IJDSA), Scientific Reports
- **Conference Reviewer**: IEEE HPCC 2024
- **External Reviewer**: ICML 2026, ACM Transactions on Privacy and Security (TOPS), IEEE Transactions on Parallel and Distributed Systems (TPDS), ACM TheWebConf/WWW 2024-2026, Chinese Journal of Computers, IEEE MASS 2023-2025

# 💰 Grants
- PI, Research on Efficient Confidential Inference for Large Models with Cloud-Edge Collaboration, NSFC Grant No. 625B2167 **<u>国家自然科学基金青年学生基础研究项目(博士研究生)</u>**, 2026.01~2027.12.

# 🎖 Honors and Awards
- *2025.12*: &nbsp;Youth Talent Support Program for PhD Students (**<u>中国科协青年科技人才培育工程博士生专项计划</u>**), China Association for Science and Technology, 2025
- *2025.10*: &nbsp;Best Presentation Award, 21st PhD Innovation Forum, College of Computer Science, Zhejiang University (浙江大学计算机学院博士生创新论坛最佳讲者), 2025
- *2025.10*: &nbsp;Outstanding Graduate Student Scholarship, Outstanding Graduate Student Cadre at Zhejiang University (浙江大学优秀研究生，优秀研究生干部), 2025
- *2024.11*: &nbsp;<b><u><font color="#333">National Scholarship</font></u></b> **(Award Rate: ～0.2% nation-wide)** (**<u>国家奖学金</u>**), Ministry of Education, China, 2024
- *2024.11*: &nbsp;Outstanding Graduate Student Scholarship, Merit Graduate Student Award, and Outstanding Graduate Student Cadre at Zhejiang University (浙江大学优秀研究生，五好研究生，优秀研究生干部), 2024
- *2024.08*: &nbsp;One of the Three <b><u><font color="#C00000">Best Storage Related Papers</font></u></b> in USENIX ATC 2024
- *2023.11*: &nbsp;Outstanding Graduate Student Scholarship, Merit Graduate Student Award, and Outstanding Graduate Student Cadre at Zhejiang University (浙江大学优秀研究生，五好研究生，优秀研究生干部)，2023
- *2022.06*: &nbsp;Zhejiang Province <b><u><font color="#333">Outstanding Graduate Award</font></u></b> (**<u>浙江省优秀毕业生</u>**)
- *2022.06*: &nbsp;Hangzhou Dianzi University Outstanding Graduate Award (杭州电子科技大学优秀毕业生)
- *2021.11*: &nbsp;<b><u><font color="#333">National Scholarship</font></u></b> **(Award Rate: ～0.2% nation-wide)** (**<u>国家奖学金</u>**), Ministry of Education, China, 2021
- *2021.07*: &nbsp;<b><u><font color="#333">1st Prize</font></u></b> in the "10th Zhejiang Province Undergraduate Smart Car Contest" (第十届浙江省大学生智能汽车竞赛一等奖, 教育部全国大学生A类学科竞赛)
- *2021.05*: &nbsp;<b><u><font color="#333">Meritorious Winner</font></u></b> in the "Mathematical Contest In Modeling (MCM/ICM 2021)" (美国大学生数学建模竞赛M奖)
- *2020.10*: &nbsp;<b><u><font color="#333">2nd Prize</font></u></b> in the "2020 Zhejiang Province Undergraduate Electronic Design Contest" (浙江省电子设计竞赛二等奖, 教育部全国大学生A类学科竞赛)
- *2020.08*: &nbsp;<b><u><font color="#333">1st Prize</font></u></b> in the "15th National Undergraduate Smart Car Contest" (第十五届全国大学生智能汽车竞赛一等奖, 教育部全国大学生A类学科竞赛) \| <b><a href="https://www.bilibili.com/video/BV1mi4y1u7Ga/?t=12245" style="color: #333;">\[video\]</a></b>
- *2020.07*: &nbsp;<b><u><font color="#333">1st Prize</font></u></b> in the "9th Zhejiang Province Undergraduate Smart Car Contest" (第九届浙江省大学生智能汽车竞赛一等奖, 教育部全国大学生A类学科竞赛)
- *2020.11*: &nbsp;<b><u><font color="#333">Zhejiang Province Government Scholarship</font></u></b> **(Award Rate: ～3% province-wide)** (**<u>浙江省政府奖学金</u>**), 2020 
- *2019.11*: &nbsp;<b><u><font color="#333">Zhejiang Province Government Scholarship</font></u></b> **(Award Rate: ～3% province-wide)** (**<u>浙江省政府奖学金</u>**), 2019

# 📖 Educations
- ![](/images/zju_logo.png){:height="22px" width="22px"} *2022.06 - Now*, Zhejiang University
  - Ph.D. Candidate in Computer Science
- ![](/images/hdu_logo.png){:height="22px" width="22px"} *2018.09 - 2022.06*, Hangzhou Dianzi University
  - B.E. in Electronic and Information Engineering

# 💬 Invited Talks
- *2024.07*, [USENIX ATC'24 - Security 1 Session] SimEnc: A High-Performance Similarity-Preserving Encryption Approach for Deduplication of Encrypted Docker Images, Santa Clara, USA. \| [\[video\]](https://www.youtube.com/watch?v=o6YZbeAey0k)
- *2024.05*, [ACM/IEEE IPSN'24 - Privacy/Security Session] dTEE: A Declarative Approach to Secure IoT Applications Using TrustZone, Hong Kong, China.

# 🧱 Patents
- Zhendong Li, Wei Dong, Lewei Jin, **Tong Sun**, Jia Chang. 数据更新的方法、装置、设备及计算机可读存储介质[P]. 中国专利: CN2023108756139. 2025.01.14. (已公开)
- Wei Dong, Bowen Jiang, Yi Gao, **Tong Sun**. 一种面向容器仓库中加密镜像的文件去重方法和装置[P]. 中国专利: CN2024103753035. 2024.06.11. (已公开)

# 💻 Internships
- *2022.09 - 2023.11*, Huawei. “Over-The-Air Differencing Algorithm Optimization Technology(差分OTA优化技术)”, <font color="#BD666D">Excellent Completion(优秀结题)</font>.

# 📞 Contact
- ✉️ <tongsun 🤯 zju [dot] edu [dot] cn> & <asckw30 🤯 gmail [dot] com>
- 💬 WeChat ID: suntong30
- 🏠 Room 301, Zetong Building, Yuquan Campus, Zhejiang University, Hangzhou, China.
<iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=120.11703103780748%2C30.2606472300403%2C120.11987417936326%2C30.262748487331002&amp;layer=mapnik&amp;marker=30.261696705950158%2C120.11845260858536" style="border: 1px solid black"></iframe><br/>

<div style="width: 800px; height: 600px; overflow: hidden;">
  <div style="transform: scale(0.5); transform-origin: top left;">
    <script type="text/javascript" id="clustrmaps" 
      src="//clustrmaps.com/map_v2.js?d=3y6JfgqRtjaYaWt_ROdd3eSqtVxa4o-vyuLhcqGVfC8&cl=ffffff&w=a">
    </script>
  </div>
</div>
