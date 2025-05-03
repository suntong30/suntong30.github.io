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
.pubtitle{
    background: #BD666D;
    color: white;
    font-size: 13.5px;
    padding: 1px 5px 1px 5px;
    border-radius: 10px;
    float: left;
    font-weight: bold;
}
.font-bold{
    font-weight:bold;
}
</style>

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, I'm currently a third-year PhD student in the [College of Computer Science and Technology](http://www.cs.zju.edu.cn/) at [Zhejiang University (ZJU)](https://www.zju.edu.cn), and expected to get the PhD degree in 2027. I'm co-advised by [Prof. Wei Dong (董玮)](https://dongw.emnets.cn/) and [Prof. Yi Gao (高艺)](https://person.zju.edu.cn/gaoyi). Prior to that, I received my B.E. degree from the [School of Electronics and Information Engineering](https://elec.hdu.edu.cn/ele_en/main.htm) in [Hangzhou Dianzi University (HDU)](https://en.hdu.edu.cn/main.htm), Hangzhou, 2022, advised by [Prof. Long Chen (陈龙)](https://elec.hdu.edu.cn/2017/1205/c1827a57681/page.htm). 

My research interests mainly focus on _IoT Systems & Security_, _Edge Computing_, and _Deduplication/Incremental Updates_. 

**Research Overview:**
- **IoT Security**
    - **Programming methods for TEE-enabled IoT devices:** [IPSN'24] [dTEE](https://ieeexplore.ieee.org/document/10577323)
- **OTA/Incremental Updates**
    - **Deduplication:** [ATC'24] [ToS'25] [SimEnc](https://www.usenix.org/conference/atc24/presentation/sun)
    - **Mobile application updates:** [TMC'24] [sdiff](https://ieeexplore.ieee.org/document/10543054), [INFOCOM'24] [MDiffPatch](https://www.emnets.cn/zh/publication/infocom-24-mdiffpatch/mdiffpatch.pdf)

**E-mail:** tongsun 🤯 zju [dot] edu [dot] cn

**Our Lab:**  [ <font color='orange'> EmNets research group</font>](https://www.emnets.cn/) 

# 🔥 News
- *2025.04*: &nbsp;Invited to serve on the AEC of **<a href="https://www.usenix.org/conference/osdi25">USENIX OSDI 2025</a>** and **<a href="https://www.usenix.org/conference/atc25">USENIX ATC 2025</a>** 😃
- *2025.03*: &nbsp;🎉🎉 Our work **SimEnc** is selected as one of the best storage related papers of USENIX ATC'24 for fast-track publication in **ACM Transactions on Storage**! 🥳
- *2025.02*: &nbsp;Invited to be the reviewer of **The Journal of Supercomputing** 😃
- *2024.11*: &nbsp;🎉🎉 Received the **2024 National Scholarship** 🏆
- *2024.09*: &nbsp;Invited to be the reviewer of **IEEE HPCC 2024** 😃
- *2024.09*: &nbsp;Invited to be the reviewer of **IEEE Transactions on Knowledge and Data Engineering** 😃
- *2024.05*: &nbsp;🎉🎉 Our work **sdiff** is accepted to **IEEE Transactions on Mobile Computing** 🥳
- *2024.05*: &nbsp;🎉🎉 Our work **SimEnc** is accepted to **<a href="https://www.usenix.org/conference/atc24">USENIX ATC 2024</a>** 🥳
- *2024.01*: &nbsp;🎉🎉 Our work **dTEE** is accepted to **<a href="https://ipsn.acm.org/2024/">ACM/IEEE IPSN 2024</a>** 🥳
- *2023.12*: &nbsp;Our work **MDiffPatch** is accepted to **<a href="https://infocom2024.ieee-infocom.org/">IEEE INFOCOM 2024</a>** 😃
  
# 📝 Publications 
- <div class="pubtitle">ACM TOS'25</div> &nbsp; <b>[Exploiting Multiple Similarity Spaces for Deduplication of Encrypted Container Images](https://dl.acm.org/doi/10.1145/3725220).</b> <br /> <u><b>Tong Sun</b></u>, Bowen Jiang, Borui Li, Jiamei Lv, Yi Gao*, and Wei Dong*. <br /> <i>ACM Transactions on Storage (TOS)</i>. One of the best storage-related papers of USENIX ATC 2024 selected for fast-track publication in ACM Trans. on Storage. <b>CCF-A.</b> <b>THCPL-A.</b> <br /> [[paper](https://suntong30.github.io/assets/pdf/TOS25_Exploiting_Multiple_Similarity_Spaces_for_Deduplication_of_Encrypted_Container_Images.pdf) | [code](https://github.com/suntong30/SimEnc)][![](https://img.shields.io/github/stars/suntong30/SimEnc?style=social&label=Code+Stars)](https://github.com/suntong30/SimEnc)
- <div class="pubtitle">IEEE TMC'24</div> &nbsp; <b>[Understanding Differencing Algorithms for Mobile Application Updates](https://ieeexplore.ieee.org/document/10543054).</b> <br /> <u><b>Tong Sun</b></u>, Bowen Jiang, Lewei Jin, Wenzhao Zhang, Yi Gao, Zhendong Li, and Wei Dong*. <br /> <i>IEEE Transactions on Mobile Computing (TMC)</i>. IF=7.7, CAS Q1, JCR Q1. <b>CCF-A.</b> <b>THCPL-A.</b> <br /> [[paper](https://suntong30.github.io/assets/pdf/TMC24_sdiff.pdf) | [code](https://github.com/suntong30/sdiff)][![](https://img.shields.io/github/stars/suntong30/sdiff?style=social&label=Code+Stars)](https://github.com/suntong30/sdiff)
- <div class="pubtitle">USENIX ATC'24</div> &nbsp; <b>[SimEnc: A High-Performance Similarity-Preserving Encryption Approach for Deduplication of Encrypted Docker Images](https://www.usenix.org/conference/atc24/presentation/sun).</b> <br /> <u><b>Tong Sun</b></u>, Bowen Jiang, Borui Li, Jiamei Lv, Yi Gao*, and Wei Dong*. <br /> <i>In Proc. of USENIX ATC, Santa Clara, CA, USA. July 10–12</i>. Acceptance Rate: 15.8% (77 out of 488). <b>CCF-A.</b> <b>THCPL-A.</b> <br /> [[paper](https://suntong30.github.io/assets/pdf/atc24-sun.pdf)  | [code](https://github.com/suntong30/SimEnc) | [slides](https://suntong30.github.io/assets/pdf/ATC24_SimEnc_slides.pdf) | [video](https://www.youtube.com/watch?v=o6YZbeAey0k)]

# 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
