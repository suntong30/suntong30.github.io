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

Hi, I'm currently a third-year PhD student in the [College of Computer Science and Technology](http://www.cs.zju.edu.cn/) at [Zhejiang University (ZJU)](https://www.zju.edu.cn), and expected to get the PhD degree in 2027. I'm co-advised by [Prof. Wei Dong (董玮)](https://dongw.emnets.cn/) and [Prof. Yi Gao (高艺)](https://person.zju.edu.cn/gaoyi). I work closely with [Prof. Borui Li (李博睿)](https://www.liborui.cn/)  and [Prof. Jiamei Lv (吕嘉美)](https://lvjiamei.github.io/). Prior to that, I received my B.E. degree from the [School of Electronics and Information Engineering](https://elec.hdu.edu.cn/ele_en/main.htm) in [Hangzhou Dianzi University (HDU)](https://en.hdu.edu.cn/main.htm), Hangzhou, 2022, advised by [Prof. Long Chen (陈龙)](https://elec.hdu.edu.cn/2017/1205/c1827a57681/page.htm). 

My research interests mainly focus on _IoT Systems & Security_, _Edge Computing_, and _Deduplication/Incremental Updates_. 

**Research Overview:**
- **IoT Security**
    - **Programming methods for TEE-enabled IoT devices:** [IPSN'24] [dTEE](https://ieeexplore.ieee.org/document/10577323)
- **OTA/Incremental Updates**
    - **Deduplication:** [ATC'24] [ToS'25] [SimEnc](https://www.usenix.org/conference/atc24/presentation/sun)
    - **Mobile application updates:** [TMC'24] [sdiff](https://ieeexplore.ieee.org/document/10543054), [INFOCOM'24] [MDiffPatch](https://www.emnets.cn/zh/publication/infocom-24-mdiffpatch/mdiffpatch.pdf)

**E-mail:** <tongsun 🤯 zju [dot] edu [dot] cn> & <asckw30 🤯 gmail [dot] com>

**Our Lab:**  [ <font color='orange'> EmNets research group</font>](https://www.emnets.cn/) 

# 🔥 News
- *2025.05*: &nbsp;Invited to serve on the <b><font color="blue">TPC</font></b> of **<a href="https://hpcn.exeter.ac.uk/dikw2025/index.php">IEEE DIKW 2025</a>** 😃
- *2025.05*: &nbsp;Invited to be the reviewer of **International Journal of Data Science and Analytics** 😃
- *2025.04*: &nbsp;Invited to serve on the <b><font color="blue">AEC</font></b> of **<a href="https://www.usenix.org/conference/osdi25">USENIX OSDI 2025</a>** and **<a href="https://www.usenix.org/conference/atc25">USENIX ATC 2025</a>** 😃
- *2025.03*: &nbsp;🎉🎉 Our work **SimEnc** is <b><font color="#4E9D2C">selected</font></b> as one of the best storage related papers of USENIX ATC'24 for fast-track publication in **ACM Transactions on Storage**! 🥳
- *2025.02*: &nbsp;Invited to be the reviewer of **The Journal of Supercomputing** 😃
- *2024.11*: &nbsp;🎉🎉 Received the **2024 National Scholarship** 🏆
- *2024.09*: &nbsp;Invited to be the reviewer of **IEEE HPCC 2024** 😃
- *2024.09*: &nbsp;Invited to be the reviewer of **IEEE Transactions on Knowledge and Data Engineering** 😃
- *2024.05*: &nbsp;🎉🎉 Our work **sdiff** (<font color="#8F3632">rejected</font> by ICSE'23😔) is <b><font color="#4E9D2C">accepted</font></b> to **IEEE Transactions on Mobile Computing** 🥳
- *2024.05*: &nbsp;🎉🎉 Our work **SimEnc** is <b><font color="#4E9D2C">accepted</font></b> to **<a href="https://www.usenix.org/conference/atc24">USENIX ATC 2024</a>** 🥳
- *2024.01*: &nbsp;🎉🎉 Our work **dTEE** (<font color="#8F3632">rejected</font> by INFOCOM'23 and CCS'23😔) is <b><font color="#4E9D2C">accepted</font></b> to **<a href="https://ipsn.acm.org/2024/">ACM/IEEE IPSN 2024</a>** 🥳
- *2023.12*: &nbsp;Our work **MDiffPatch** is <b><font color="#4E9D2C">accepted</font></b> to **<a href="https://infocom2024.ieee-infocom.org/">IEEE INFOCOM 2024</a>** 😃
  
# 📝 Publications 
<div>
(*Corresponging Author)
</div>

## 2025
- <div class="pubtitle">ACM TOS'25</div> &nbsp; <b>[Exploiting Multiple Similarity Spaces for Deduplication of Encrypted Container Images](https://dl.acm.org/doi/10.1145/3725220).</b> <br /> <u><b>Tong Sun</b></u>, Bowen Jiang, Borui Li, Jiamei Lv, Yi Gao\*, and Wei Dong\*. <br /> <i>ACM Transactions on Storage (TOS)</i>. <br /> One of the best storage-related papers of USENIX ATC 2024 selected for fast-track publication in ACM Trans. on Storage. <br /> <b><font color="#BD666D">CCF-A.</font></b> <b><font color="#BD666D">THCPL-A.</font></b> <br /> [[paper](https://suntong30.github.io/assets/pdf/TOS25_Exploiting_Multiple_Similarity_Spaces_for_Deduplication_of_Encrypted_Container_Images.pdf) | [code](https://github.com/suntong30/SimEnc)][![](https://img.shields.io/github/stars/suntong30/SimEnc?style=social&label=Code+Stars)](https://github.com/suntong30/SimEnc)

## 2024
- <div class="pubtitle">IEEE TMC'24</div> &nbsp; <b>[Understanding Differencing Algorithms for Mobile Application Updates](https://ieeexplore.ieee.org/document/10543054).</b> <br /> <u><b>Tong Sun</b></u>, Bowen Jiang, Lewei Jin, Wenzhao Zhang, Yi Gao, Zhendong Li, and Wei Dong\*. <br /> <i>IEEE Transactions on Mobile Computing (TMC)</i>. <br /> IF=7.7, CAS Q1, JCR Q1.<br /> <b><font color="#BD666D">CCF-A.</font></b> <b><font color="#BD666D">THCPL-A.</font></b> <br /> [[paper](https://suntong30.github.io/assets/pdf/TMC24_sdiff.pdf) | [code](https://github.com/suntong30/sdiff)][![](https://img.shields.io/github/stars/suntong30/sdiff?style=social&label=Code+Stars)](https://github.com/suntong30/sdiff)
- <div class="pubtitle">USENIX ATC'24</div> &nbsp; <b>[SimEnc: A High-Performance Similarity-Preserving Encryption Approach for Deduplication of Encrypted Docker Images](https://www.usenix.org/conference/atc24/presentation/sun).</b> <br /> <u><b>Tong Sun</b></u>, Bowen Jiang, Borui Li, Jiamei Lv, Yi Gao\*, and Wei Dong\*. <br /> <i>Proceedings of the 2024 USENIX Annual Technical Conference (USENIX ATC), Santa Clara, CA, USA. July 10–12</i>. <br /> Acceptance Rate: 15.8% (77 out of 488). <br /> <b><font color="#BD666D">CCF-A.</font></b> <b><font color="#BD666D">THCPL-A.</font></b> <b><font color="#BD666D">CORE A.</font></b> <br /> [[paper](https://suntong30.github.io/assets/pdf/atc24-sun.pdf)  | [code](https://github.com/suntong30/SimEnc) | [slides](https://suntong30.github.io/assets/pdf/ATC24_SimEnc_slides.pdf) | [video](https://www.youtube.com/watch?v=o6YZbeAey0k)][![](https://img.shields.io/github/stars/suntong30/SimEnc?style=social&label=Code+Stars)](https://github.com/suntong30/SimEnc)![](/images/usenixbadges-available.png){:height="22px" width="22px"}![](/images/usenixbadges-functional.png){:height="22px" width="22px"}
- <div class="pubtitle">ACM/IEEE IPSN'24</div> &nbsp; <b>[dTEE: A Declarative Approach to Secure IoT Applications Using TrustZone](https://ieeexplore.ieee.org/document/10577323).</b> <br /> <u><b>Tong Sun</b></u>, Borui Li, Yixiao Teng, Yi Gao, and Wei Dong\*. <br /> <i>Proceedings of the 23rd ACM/IEEE Conference on Information Processing in Sensor Networks (IPSN), Hong Kong, China. May 13-16</i>. <br /> Acceptance Rate: 21.5% (20 out of 93).<br /> <b><font color="#BD666D">CCF-B.</font></b> <b><font color="#BD666D">THCPL-A.</font></b> <b><font color="#BD666D">CORE A*.</font></b><br /> [[paper](https://suntong30.github.io/assets/pdf/IPSN24_dTEE.pdf)]
- <div class="pubtitle">IEEE INFOCOM'24</div> &nbsp; <b>[Exploiting Multiple Similarity Spaces for Efficient and Flexible Incremental Update of Mobile Apps](https://ieeexplore.ieee.org/document/10621326).</b> <br /> Lewei Jin, Wei Dong\*, Bowen Jiang, <u><b>Tong Sun</b></u>, and Yi Gao\*. <br /> <i>Proceedings of IEEE Conference on Computer Communications (INFOCOM), Vancouver, Canada. May 20-23</i>. <br />Acceptance Rate: 19.6% (256 out of 1307).<br /> <b><font color="#BD666D">CCF-A.</font></b> <b><font color="#BD666D">THCPL-A.</font></b> <b><font color="#BD666D">CORE A*.</font></b> <br /> [[paper](https://suntong30.github.io/assets/pdf/INFOCOM24_MDiffPatch.pdf)]

# 🔍 Academic Services
#### Committee Member
- USENIX Symposium on Operating Systems Design and Implementation (OSDI) - 2025 (AE)
- USENIX Annual Technical Conference (ATC) - 2025 (AE)
- IEEE DIKW - 2025 (TPC)

#### Reviewer 
- Journal Reviewer
    - IEEE Transactions on Knowledge and Data Engineering (TKDE) - 2024
    - The Journal of Supercomputing - 2025
    - International Journal of Data Science and Analytics - 2025
- Conference Reviewer
    - IEEE HPCC - 2024
- External Reviewer
    - Chinese Journal of Computers - 2023
    - IEEE MASS - 2023, 2024
    - ACM The Web Conference (TheWebConf/WWW) - 2024
    - IEEE Transactions on Parallel and Distributed Systems (TPDS) - 2024

# 🎖 Honors and Awards
- *2024.11*: &nbsp;National Scholarship (博士生国家奖学金), Ministry of Education, China
- *2024.11*: &nbsp;Outstanding Graduate Student Scholarship, Merit Graduate Student Award, and Outstanding Graduate Student Cadre at Zhejiang University (浙江大学优秀研究生，五好研究生，优秀研究生干部)
- *2023.11*: &nbsp;Outstanding Graduate Student Scholarship, Merit Graduate Student Award, and Outstanding Graduate Student Cadre at Zhejiang University (浙江大学优秀研究生，五好研究生，优秀研究生干部)，2023
- *2022.06*: &nbsp;Zhejiang Province Outstanding Graduate Award (浙江省优秀毕业生)
- *2022.06*: &nbsp;Hangzhou Dianzi University Outstanding Graduate Award (杭州电子科技大学优秀毕业生)
- *2022.11*: &nbsp;National Scholarship (本科生国家奖学金), Ministry of Education, China
- *2021.07*: &nbsp;1st Prize in the "10th Zhejiang Province Undergraduate Smart Car Contest" (第十届浙江省大学生智能汽车竞赛一等奖)
- *2021.05*: &nbsp;Meritorious Winner in the "Mathematical Contest In Modeling (MCM/ICM 2021)" (美国大学生数学建模竞赛M奖)
- *2020.10*: &nbsp;2nd Prize in the "2020 Zhejiang Province Undergraduate Electronic Design Contest" (浙江省电子设计竞赛二等奖)
- *2020.08*: &nbsp;1st Prize in the "15th National Undergraduate Smart Car Contest" (第十五届全国大学生智能汽车竞赛一等奖)
- *2020.07*: &nbsp;1st Prize in the "9th Zhejiang Province Undergraduate Smart Car Contest" (第九届浙江省大学生智能汽车竞赛一等奖)
- *2020.11*: &nbsp;Zhejiang Province Government Scholarship (浙江省政府奖学金)
- *2019.11*: &nbsp;Zhejiang Province Government Scholarship (浙江省政府奖学金)

# 📖 Educations
- ![](/images/zju_logo.png){:height="22px" width="22px"} *2022.06 - Now*, Ph.D. Student, College of Computer Science and Technology, Zhejiang University. 
- ![](/images/hdu_logo.png){:height="22px" width="22px"} *2018.09 - 2022.06*, Bachelor - School of Electronics and Information Engineering, Hangzhou Dianzi University.

# 💬 Invited Talks
- *2024.07*, [USENIX ATC'24 - Security 1 Session] SimEnc: A High-Performance Similarity-Preserving Encryption Approach for Deduplication of Encrypted Docker Images, Santa Clara, USA. \| [\[video\]](https://www.youtube.com/watch?v=o6YZbeAey0k)
- *2024.05*, [ACM/IEEE IPSN'24 - Privacy/Security Session] dTEE: A Declarative Approach to Secure IoT Applications Using TrustZone, Hong Kong, China.

# 🧱 Patents
- Zhendong Li, Wei Dong, Lewei Jin, **Tong Sun**, Jia Chang. 数据更新的方法、装置、设备及计算机可读存储介质[P]. 中国专利: CN2023108756139. 2025.01.14. (已公开)
- Wei Dong, Bowen Jiang, Yi Gao, **Tong Sun**. 一种面向容器仓库中加密镜像的文件去重方法和装置[P]. 中国专利: CN2024103753035. 2024.06.11. (已公开)

# 💻 Internships
- *2022.09 - 2023.10*, Huawei. “Over-The-Air Differencing Algorithm Optimization Technology(差分OTA优化技术)”, <font color="#BD666D">Excellent Completion(优秀结题)</font>.

# 📞 Contact
- ✉️ <tongsun 🤯 zju [dot] edu [dot] cn> & <asckw30 🤯 gmail [dot] com>
- 💬 WeChat ID: suntong30
- 🏠 Room 301, Zetong Building, Yuquan Campus, Zhejiang University, Hangzhou, China.
<iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=120.11624515056612%2C30.2606055287791%2C120.11893004179002%2C30.26239403363078&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/>

<div style="width: 800px; height: 600px; overflow: hidden;">
  <div style="transform: scale(0.5); transform-origin: top left;">
    <script type="text/javascript" id="clustrmaps" 
      src="//clustrmaps.com/map_v2.js?d=3y6JfgqRtjaYaWt_ROdd3eSqtVxa4o-vyuLhcqGVfC8&cl=ffffff&w=a">
    </script>
  </div>
</div>
