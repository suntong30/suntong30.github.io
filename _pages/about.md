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
    - **Secure inference:** [CCS'25] [TensorShield]()
- **OTA/Incremental Updates**
    - **Deduplication:** [ATC'24] [ToS'25] [SimEnc](https://www.usenix.org/conference/atc24/presentation/sun)
    - **Mobile application updates:** [TMC'24] [sdiff](https://ieeexplore.ieee.org/document/10543054), [INFOCOM'24] [MDiffPatch](https://www.emnets.cn/zh/publication/infocom-24-mdiffpatch/mdiffpatch.pdf)

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
  <li><em>2025.05:</em> 🎉🎉 Our work <strong>TensorShield</strong> is <b><font color="blue">accepted</font></b> to <strong>ACM CCS 2025</strong>. Thanks to all collaborators! See you in Taipei.</li> 
  <li><em>2025.05:</em> 😃 Invited to serve on the <b><font color="blue">AEC</font></b> of <strong>USENIX FAST 2026</strong>.</li>
  <li><em>2025.05:</em> 😃 Invited to serve on the <b><font color="blue">TPC</font></b> of <strong>IEEE DIKW 2025</strong>.</li>
  <li><em>2025.05:</em> 😃 Invited to be the reviewer of <strong>International Journal of Data Science and Analytics</strong>.</li>
  <li><em>2025.04:</em> 😃 Invited to serve on the <b><font color="blue">AEC</font></b> of <strong>USENIX OSDI 2025</strong> and <strong>USENIX ATC 2025</strong>.</li>
  <li><em>2025.03:</em> 🎉🎉 Our work <strong>SimEnc</strong> is selected as one of the <b><font color="#C00000">best storage related papers (Top 3.9%)</font></b> of USENIX ATC'24 for fast-track publication in <strong>ACM Transactions on Storage</strong>. Thanks to all collaborators!</li>
  <li><em>2025.02:</em> 😃 Invited to be the reviewer of <strong>The Journal of Supercomputing</strong>. </li>
  <li><em>2024.11:</em> 🏆 Received the <strong>2024 National Scholarship</strong>!</li>
  <li><em>2024.09:</em> 😃 Invited to be the reviewer of <strong>IEEE HPCC 2024</strong>. </li>
  <li><em>2024.09:</em> 😃 Invited to be the reviewer of <strong>IEEE Transactions on Knowledge and Data Engineering</strong>.</li>
  <li><em>2024.05:</em> 🎉🎉 Our work <strong>sdiff</strong> is <b><font color="blue">accepted</font></b> to <strong>IEEE Transactions on Mobile Computing</strong>. Thanks to all collaborators!</li>
  <li><em>2024.05:</em> 🎉🎉 Our work <strong>SimEnc</strong> is <b><font color="blue">accepted</font></b> to <strong>USENIX ATC 2024</strong>. Thanks to all collaborators! See you in Santa Clara.</li>
  <li><em>2024.01:</em> 🎉🎉 Our work <strong>dTEE</strong> is <b><font color="blue">accepted</font></b> to <strong>ACM/IEEE IPSN 2024</strong>. Thanks to all collaborators! See you in Hong Kong.</li>
  <li><em>2023.12:</em> 😃 Our work <strong>MDiffPatch</strong> is <b><font color="blue">accepted</font></b> to <strong>IEEE INFOCOM 2024</strong>, congrats to Lewei!</li>
</ul>
</div>
  
# 📝 Publications 
<div>
(*Corresponding Author)
</div>

## 2025
- <div class="pubtitle">ACM CCS'25</div> &nbsp; <b><a href="" style="color: black;">TensorShield: Safeguarding On-Device Inference by Shielding Critical DNN Tensors with TEE</a></b> <br /> <u><b><font color="black">Tong Sun</font></b></u>, Bowen Jiang, Hailong Lin, Borui Li, Yixiao Teng, Yi Gao, and Wei Dong. <br /> <i>Proceedings of ACM Conference on Computer and Communications Security (CCS), October 13-17, 2025</i>. <br /> Acceptance Rate: TBD. <br /> <b><font color="#BD666D">CCF-A.</font></b> <b><font color="#BD666D">THCPL-A.</font></b> <b><font color="#BD666D">CORE A*.</font></b> <br /> [[paper]() | [web]() | [code]() | [slides]()]
- <div class="pubtitle">ACM TOS'25</div> &nbsp; <b><a href="https://dl.acm.org/doi/10.1145/3725220" style="color: black;">Exploiting Multiple Similarity Spaces for Deduplication of Encrypted Container Images</a></b> <br /> <u><b><font color="black">Tong Sun</font></b></u>, Bowen Jiang, Borui Li, Jiamei Lv, Yi Gao\*, and Wei Dong\*. <br /> <i>ACM Transactions on Storage (TOS)</i>. <br /> <b><font color="#BD666D">CCF-A.</font></b> <b><font color="#BD666D">THCPL-A.</font></b> <br />  [[paper](https://suntong30.github.io/assets/pdf/TOS25_Exploiting_Multiple_Similarity_Spaces_for_Deduplication_of_Encrypted_Container_Images.pdf) | [web](https://dl.acm.org/doi/10.1145/3725220) | [code](https://github.com/suntong30/SimEnc)][![](https://img.shields.io/github/stars/suntong30/SimEnc?style=social&label=Code+Stars)](https://github.com/suntong30/SimEnc)

## 2024
- <div class="pubtitle">IEEE TMC'24</div> &nbsp; <b><a href="https://ieeexplore.ieee.org/document/10543054" style="color: black;">Understanding Differencing Algorithms for Mobile Application Updates</a></b> <br /> <u><b><font color="black">Tong Sun</font></b></u>, Bowen Jiang, Lewei Jin, Wenzhao Zhang, Yi Gao, Zhendong Li, and Wei Dong\*. <br /> <i>IEEE Transactions on Mobile Computing (TMC)</i>. <br /> IF=7.7, CAS Q1, JCR Q1.<br /> <b><font color="#BD666D">CCF-A.</font></b> <b><font color="#BD666D">THCPL-A.</font></b> <br /> [[paper](https://suntong30.github.io/assets/pdf/TMC24_sdiff.pdf) | [web](https://ieeexplore.ieee.org/document/10543054) | [code](https://github.com/suntong30/sdiff)][![](https://img.shields.io/github/stars/suntong30/sdiff?style=social&label=Code+Stars)](https://github.com/suntong30/sdiff)
- <div class="pubtitle">USENIX ATC'24</div> &nbsp; <b><a href="https://www.usenix.org/conference/atc24/presentation/sun" style="color: black;">SimEnc: A High-Performance Similarity-Preserving Encryption Approach for Deduplication of Encrypted Docker Images</a></b> <br /> <u><b><font color="black">Tong Sun</font></b></u>, Bowen Jiang, Borui Li, Jiamei Lv, Yi Gao\*, and Wei Dong\*. <br /> <i>Proceedings of the 2024 USENIX Annual Technical Conference (USENIX ATC), Santa Clara, CA, USA. July 10–12</i>. <b><font color="#C00000">Best Storage Related Paper</font></b> <br /> Acceptance Rate: 15.8% (77 out of 488). <br /> <b><font color="#BD666D">CCF-A.</font></b> <b><font color="#BD666D">THCPL-A.</font></b> <b><font color="#BD666D">CORE A.</font></b> <br /> [[paper](https://suntong30.github.io/assets/pdf/atc24-sun.pdf) | [web](https://www.usenix.org/conference/atc24/presentation/sun) | [code](https://github.com/suntong30/SimEnc) | [slides](https://suntong30.github.io/assets/pdf/ATC24_SimEnc_slides.pdf) | [video](https://www.youtube.com/watch?v=o6YZbeAey0k)][![](https://img.shields.io/github/stars/suntong30/SimEnc?style=social&label=Code+Stars)](https://github.com/suntong30/SimEnc)  ![](/images/usenixbadges-available.png){:height="35px" width="35px"}  ![](/images/usenixbadges-functional.png){:height="35px" width="35px"}
- <div class="pubtitle">ACM/IEEE IPSN'24</div> &nbsp; <b><a href="https://ieeexplore.ieee.org/document/10577323" style="color: black;">dTEE: A Declarative Approach to Secure IoT Applications Using TrustZone</a></b> <br /> <u><b><font color="black">Tong Sun</font></b></u>, Borui Li, Yixiao Teng, Yi Gao, and Wei Dong\*. <br /> <i>Proceedings of the 23rd ACM/IEEE Conference on Information Processing in Sensor Networks (IPSN), Hong Kong, China. May 13-16</i>. <br /> Acceptance Rate: 21.5% (20 out of 93).<br /> <b><font color="#BD666D">CCF-B.</font></b> <b><font color="#BD666D">THCPL-A.</font></b> <b><font color="#BD666D">CORE A*.</font></b><br /> [[paper](https://suntong30.github.io/assets/pdf/IPSN24_dTEE.pdf) | [web](https://ieeexplore.ieee.org/document/10577323) | [slides](https://suntong30.github.io/assets/pdf/IPSN24_dTEE_slides.pdf)]
- <div class="pubtitle">IEEE INFOCOM'24</div> &nbsp; <b><a href="https://ieeexplore.ieee.org/document/10621326" style="color: black;">Exploiting Multiple Similarity Spaces for Efficient and Flexible Incremental Update of Mobile Apps</a></b> <br /> Lewei Jin, Wei Dong\*, Bowen Jiang, <u><b><font color="black">Tong Sun</font></b></u>, and Yi Gao\*. <br /> <i>Proceedings of IEEE Conference on Computer Communications (INFOCOM), Vancouver, Canada. May 20-23</i>. <br />Acceptance Rate: 19.6% (256 out of 1307).<br /> <b><font color="#BD666D">CCF-A.</font></b> <b><font color="#BD666D">THCPL-A.</font></b> <b><font color="#BD666D">CORE A*.</font></b> <br /> [[paper](https://suntong30.github.io/assets/pdf/INFOCOM24_MDiffPatch.pdf) | [web](https://ieeexplore.ieee.org/document/10621326)]

# 🔍 Academic Services
- **Technical Program Committee**: IEEE DIKW 2025
- **Program Committee for Artifact Evaluation**: USENIX OSDI 2025, USENIX ATC 2025, USENIX FAST 2026
- **Journal Reviewer**: IEEE TKDE 2024, TJS 2025, IJDSA 2025
- **Conference Reviewer**: IEEE HPCC 2024
- **External Reviewer**: IEEE TPDS 2024, ACM TheWebConf/WWW 2024, Chinese Journal of Computers 2023, IEEE MASS 2023-2024

# 🎖 Honors and Awards
- *2024.11*: &nbsp;2024 <b><font color="#BD666D">National Scholarship</font></b> (博士生国家奖学金), Ministry of Education, China
- *2024.11*: &nbsp;Outstanding Graduate Student Scholarship, Merit Graduate Student Award, and Outstanding Graduate Student Cadre at Zhejiang University (浙江大学优秀研究生，五好研究生，优秀研究生干部)
- *2024.08*: &nbsp;<b><font color="#BD666D">One of the best storage papers</font></b> of USENIX ATC'24
- *2023.11*: &nbsp;Outstanding Graduate Student Scholarship, Merit Graduate Student Award, and Outstanding Graduate Student Cadre at Zhejiang University (浙江大学优秀研究生，五好研究生，优秀研究生干部)，2023
- *2022.06*: &nbsp;Zhejiang Province <b><font color="#BD666D">Outstanding Graduate Award</font></b> (浙江省优秀毕业生)
- *2022.06*: &nbsp;Hangzhou Dianzi University Outstanding Graduate Award (杭州电子科技大学优秀毕业生)
- *2021.11*: &nbsp;2021 <b><font color="#BD666D">National Scholarship</font></b> (本科生国家奖学金), Ministry of Education, China
- *2021.07*: &nbsp;<b><font color="blue">1st Prize</font></b> in the "10th Zhejiang Province Undergraduate Smart Car Contest" (第十届浙江省大学生智能汽车竞赛一等奖, 教育部全国大学生A类学科竞赛)
- *2021.05*: &nbsp;<b><font color="blue">Meritorious Winner</font></b> in the "Mathematical Contest In Modeling (MCM/ICM 2021)" (美国大学生数学建模竞赛M奖)
- *2020.10*: &nbsp;<b><font color="blue">2nd Prize</font></b> in the "2020 Zhejiang Province Undergraduate Electronic Design Contest" (浙江省电子设计竞赛二等奖, 教育部全国大学生A类学科竞赛)
- *2020.08*: &nbsp;<b><font color="blue">1st Prize</font></b> in the "15th National Undergraduate Smart Car Contest" (第十五届全国大学生智能汽车竞赛一等奖, 教育部全国大学生A类学科竞赛) \| [\[video\]](https://www.bilibili.com/video/BV1mi4y1u7Ga/?t=12245)
- *2020.07*: &nbsp;<b><font color="blue">1st Prize</font></b> in the "9th Zhejiang Province Undergraduate Smart Car Contest" (第九届浙江省大学生智能汽车竞赛一等奖, 教育部全国大学生A类学科竞赛)
- *2020.11*: &nbsp;2020 Zhejiang Province <b><font color="#BD666D">Government Scholarship</font></b> (浙江省政府奖学金)
- *2019.11*: &nbsp;2019 Zhejiang Province <b><font color="#BD666D">Government Scholarship</font></b> (浙江省政府奖学金)

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
- *2022.09 - 2023.11*, Huawei. “Over-The-Air Differencing Algorithm Optimization Technology(差分OTA优化技术)”, <font color="#BD666D">Excellent Completion(优秀结题)</font>.

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
