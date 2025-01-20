a = [
    {
        authors: 'Tong Li、Zhaoxuan Zhang、Yuxin Wang、Yan Cui、Yuqi Li、Dongsheng Zhou、Baocai Yin、Xin Yang*',
        title: 'Self-Supervised Learning, Panorama, Indoor Scene, Point Cloud Completion.',
        io: 'Given an single RGB-D panorama, we propose a self-supervised based method for indoor scene point cloud completion.',
        tags: [
            ['The Visual Computer 2024', 1],
            ['. ', 0]
        ],
        abstract: 'In this paper, we propose a self-supervised learning method of point cloud completion for indoorscenes. Considering the limited view of single-view image and the time-consuming and labor-intensive acquisition of multi-view images, we take panoramas as input, which makes the acquisition easier and the scope of the scene wider. As it is difficult to obtain complete scene point cloud, we design an auxiliary task to simulate scene missing area by shifting viewpoint of panorama and extract the supervision information of the scene itself. Given the difficulty to complete large-scale scene point cloud, we design a neighborhood integration and feature spreading module for feature extraction and reservation before substantial point cloud downsampling, enabling the completion network to handle large-scale point cloud. Then we propose a transformer-based scene point cloud completion network and show competitive completion results compared to relevant supervised learning methods.',
        imgs: [
            { src: 'SIS_pic1.png', label: 'The pipeline of our method' },
            { src: 'SIS_pic2.png', label: 'Visualization of point cloud completion results for different methods. ' },
        ],
        links: [
            { name: 'paper', link: 'https://doi.org/10.1145/3574131.3574457' },
            { name: 'code', link: 'https://github.com/linharrrrrt/RWEI_AECRN' }
        ]
    },
    {
        authors: 'Xuefeng Yin, Chenyang Zhu, Shanglai Qu, Yuqi Li, Kai Xu, Baocai Yin, Xin Yang', title: 'CSO: Constraint-guided Space Optimization for Active Scene Mapping',
        tags: [
            ['ACM Multimedia 2024', 1],
            ['October 2024. Melbourne, Australia', 0],
            ['(CCF A)', 2]
        ],
        io: '',
        abstract: 'Simultaneously mapping and exploring a complex unknown scene is an NP-hard problem, which is still challenging with the rapid development of deep learning techniques. We present CSO, a deep reinforcement learning-based framework for efficient active scene mapping. Constraint-guided space optimization is adopted for both state and critic space to reduce the difficulty of finding the global optimal explore path and avoid long-distance round trips while exploring. We first take the frontiers-based entropy as the input constraint with the raw observation into the network, which guides the training start from imitating the local greedy searching. However, the entropy-based optimization can easily get stuck with few local optimal or cause inefficient round trips since the entropy space and the real world do not share the same metric. Inspired by constrained reinforcement learning, we then introduce an action mask-based optimization constraint to align the metric of these two spaces. Exploration optimization in aligned spaces can avoid long-distance round trips more effectively. We evaluate our method with a ground robot in 29 complex indoor scenes with different scales. Our method can perform 19.16\% more exploration efficiency and 3.12\% more exploration completeness on average compared to the state-of-the-art alternatives. We also implement our method in real-world scenes that can efficiently explore an area of 649 $m^2$. The experiment video can be found in the supplementary material.',//文章摘要。建议200个英文单词左右。
        imgs: [
            { src: 'teaser_v8.png' },
            { src: 'pipeline_tcvg_v7_acmmm2024.png' },
        ],
        links: [
            { name: 'paper', link: 'https://openreview.net/pdf/b923e07153b40465858258bfb32abc6f33405131.pdf' },
        ],
        video: '',
    },
    {
        authors: 'Hu Lin, Chengjiang Long*, Yifeng Fei, Qianchen Xia*, Erwei Yin, Baocai Yin, Xin Yang*',
        title: 'Exploring Matching Rates: From Keypoint Selection to Camera Relocalization.',
        tags: [
            ['ACM MM 2024', 1],
            ['. Oral ', 0],
            ['(CCF A)', 2]
        ],
        io: "Input an RGB image and the camera's intrinsic parameters to output the 6DoF pose of the capturing camera.',//Input-Output",
        abstract: "amera relocalization is a challenging task to estimate camera pose within a known scene, with wide applications in the fields of Virtual Reality (VR), Augmented Reality (AR), robotics, and etc. Most existing learning-based methods invariably utilize all the information within an image for pose estimation. Although these methods have demonstrated leading pose accuracy in some cases, they are still far from being sufficient to handle the robustness under challenging viewpoints with less impacts on the localization accuracy for viewpoints that are easier to localize. In this paper, we propose a novel two-branch camera pose estimation framework: one branch utilizes keypoint-guided partial scene coordinate regression, while the other employs full scene coordinate regression to assess the credibility of image poses, thereby enabling more accurate camera localization. In particular, we devise a keypoint selection method predicated on matching rates which is designed to measure the matching quality between a 3D keypoint and 2D keypoints across views. With these selected 3D keypoints, we can generate 2D supervision mask with the ground-truth camera pose to supervise the keypoint prediction from the keypoint selection network. Meanwhile, we further refine the 2D supervision mask through the optimization with reprojection errors on the scene coordinate network, which estimates the scene coordinates for points within the scene that truly warrant attention, also enhances the localization performance. We also introduce a gated camera pose estimation strategy on the two-branch pose estimation framework, employing an updated keypoint selection network for images with higher credibility and a more robust network for difficult viewpoints. By adopting an effective curriculum learning scheme, we achieve higher accuracy within a training span of just 20 minutes. Our method's superior performance is validated through rigorous experimentation.The code is released at https://github.com/DUT-ICCD/KP-Guided-Reloc.",//文章摘要。建议200个英文单词左右。
        imgs: [
            { src: 'overview.png' },
            { src: 'pipeline.png' },
        ],
        links: [
            { name: 'paper', link: 'https://doi.org/10.1145/3664647.3681628' },
            { name: 'code', link: 'https://github.com/DUT-ICCD/KP-Guided-Reloc' },
        ],
        video: '',
    },
    {
        authors: 'Nannan Yu, Tao Ma, Jiqing Zhang, Yuji Zhang, Qirui Bao, Xiaopeng Wei, Xin Yang*',
        title: 'Adaptive Vision Transformer for Event-Based Human Pose Estimation.',
        tags: [
            ['ACM International Conference on Multimedia 2024', 1],
            ['.', 0],
            ['(CCF A)', 2]
        ],
        abstract: "Event-based human pose estimation has gained popularity due to the benefits of high temporal resolution and high dynamic range offered by event cameras. The inherent spatial sparsity of event data makes discarding less significant regions a straightforward and effective way to decrease the computation. However, implementing this operation in CNNs poses a challenge, as it disrupts the regularity of dense convolutional workload. In this paper, we propose an adaptive vision transformer, a novel efficient backbone for human pose estimation with event cameras. Specifically, we present two adaptive patch and token sampling approaches based on the characteristics of events, thereby reducing the computational load while still achieving comparable performance. Firstly, we design an adaptive patch sampling scheme to eliminate inactivity patches by assessing the entropy of the events before they are inputted into the transformer. Secondly, we further propose an adaptive token reduction strategy to selectively remove less informative tokens in transformer layers through a dynamic token pruning algorithm. To exploit event-based visual cues in human pose estimation tasks, we construct a large-scale frame-event-based dataset, dubbed Event Multi Movement HPE (EventMM HPE). The dataset provides annotation frequencies up to 240 Hz. Extensive experiments",
        imgs: [
            { src: 'ACMMM_camera_pic1.png' },
            { src: 'ACMMM_camera_pic2.png' },
        ],
        links: [
            { name: 'paper', link: 'https://openreview.net/forum?id=p4MdxsQVXu' },
        ],
        video: '',
    },
    {
        authors: '王超毅, 于男男，乔羽，任健康，周东生，魏小鹏，张强，杨鑫*',
        title: '基于事件相机的图像语义分割.',
        tags: [
            ['计算机辅助设计与图形学学报', 1],
            ['.', 0],
            ['(CCF A)', 2]
        ],
        abstract: "语义分割技术对自动驾驶等实际场景的图像处理十分重要. 然而基于传统相机的语义分割仍面临动态光照下信息缺失以及高速运动目标的运动模糊等问题. 为此，本文引入高动态范围和高响应速度的事件相机, 能够在恶劣光照和高速运动条件下有效成像, 并提出了一种基于事件相机的图像语义分割方法(Event-based Image Semantic Segmentation, EVISS). 在数据集部分, 针对基于事件相机的语义分割数据集较少且标注质量不高的问题, 通过仿真环境制作了一个大规模和高精度标注的数据集Carla-Semantic; 在网络设计部分, 针对分布不均的事件数据特征难提取的问题, EVISS方法通过改进的图拉普拉斯公式和注意力机制, 增强图像的全局联系性和上下文依赖, 有效提取高层级事件特征. 在所制作的Carla-Semantic数据集上与现有技术Ev-SegNet进行实验的结果表明, EVISS方法在MPA和mIoU评价指标上分别达到87.89%和81.93%, 超越了对比方法的表现, 有效地实现基于事件相机的图像语义分割.",
        imgs: [
            { src: 'ZW_pic1.png' },
            { src: 'ZW_pic2.png' },
        ],
        links: [
            { name: 'paper', link: 'https://www.jcad.cn/cn/article/pdf/preview/10.3724/SP.J.1089.2023-00698.pdf' },
        ],
        video: '',
    },
    {
        authors: 'Haiyang Mei, Zuowen Wang, Xin Yang*, Xiaopeng Wei, Tobi Delbruck:',
        title: 'Deep Polarization Reconstruction With PDAVIS Events.',
        tags: [
            ['CVPR 2023', 1],
            ['.', 0],
            ['(CCF A)', 2]
        ],
        abstract: "The polarization event camera PDAVIS is a novel bio-inspired neuromorphic vision sensor that reports both conventional polarization frames and asynchronous, continuously per-pixel polarization brightness changes (polarization events) with fast temporal resolution and large dynamic range. A deep neural network method (Polarization FireNet) was previously developed to reconstruct the polarization angle and degree from polarization events for bridging the gap between the polarization event camera and mainstream computer vision. However, Polarization FireNet applies a network pre-trained for normal event-based frame reconstruction independently on each of four channels of polarization events from four linear polarization angles, which ignores the correlations between channels and inevitably introduces content inconsistency between the four reconstructed frames, resulting in unsatisfactory polarization reconstruction performance. In this work, we strive to train an effective, yet efficient, DNN model that directly outputs polarization from the input raw polarization events. To this end, we constructed the first large-scale event-to-polarization dataset, which we subsequently employed to train our events-to-polarization network E2P. E2P extracts rich polarization patterns from input polarization events and enhances features through cross-modality context integration. We demonstrate that E2P outperforms Polarization FireNet by a significant margin with no additional computing cost. Experimental results also show that E2P produces more accurate measurement of polarization than the PDAVIS frames in challenging fast and high dynamic range scenes.",
        imgs: [
            { src: 'CVPR_2023_M_pic1.png' },
            { src: 'CVPR_2023_M_pic2.png' },
        ],
        links: [
            { name: 'paper', link: 'https://openaccess.thecvf.com/content/CVPR2023/papers/Mei_Deep_Polarization_Reconstruction_With_PDAVIS_Events_CVPR_2023_paper.pdf' },
            { name: 'code', link: 'https://github.com/SensorsINI/e2p' }
        ],
        video: '',
    },
    {
        authors: 'Yuanbo Wang, Shanglai Qu, Tianyu Meng, Yan Cui, Haiyin Piao, XiaoPeng Wei∗, Xin Yang∗',
        title: 'Event-intensity Stereo with Cross-modal Fusion and Contrast.',
        tags: [
            ['International Conference on Intelligent Robots and Systems', 1],
        ],
        abstract: "For binocular stereo, traditional cameras excel in capturing fine details and texture information but are limited in terms of dynamic range and their ability to handle rapid motion. On the contrary, event cameras provide pixel-level intensity changes with low latency and a wide dynamic range, albeit at the cost of less detail in their output. It is natural to leverage the strengths of both modalities. We solve this problem by introducing a cross-modal fusion module that learns a visual representation from both sensor inputs. Additionally, we extract and compare dense event-intensity stereo pair features by contrasting “pairs of event-intensity pairs from different views and different modalities and different timestamps”. This provides the flexibility in masking hard negatives and enables networks to effectively combine event-intensity signals within a contrastive learning framework, leading to an improved matching accuracy and facilitating more accurate estimation of disparity. Experimental results validate the effectiveness of our model and the improvement of disparity estimation accuracy",
        imgs: [
            { src: 'IROS_2024.png', label: " From left to right: the architecture overview of our proposed models, event-intensity voxel fusion (EIVF) module,and event-intensity spatial pyramid fusion (EI-SPF) module." },
            { src: 'IROS_2024_1.png' },
        ],
        links: [

        ],
        video: '',
    },
    {
        authors: 'Letian Yu, Jiaxi Yang, Bo Dong, Qirui Bao, Yuanbo Wang, Felix Heide, Xiaopeng Wei, Xin Yang*',
        title: 'Separating the Wheat from the Chaff: Spatio-Temporal Transformer with View-interweaved Attention for Photon-Efficient Depth Sensing',
        tags: [
            ['AAAI 2025', 1],
            ['.', 0],
            ['(CCF A)', 2]
        ],
        abstract: "Time-resolved imaging is an emerging sensing modality that has been shown to enable adavanced applications, including remote sensing, fluorescence lifetime imaging, and even non-line-of-sight sensing. Single-photon avalanche diodes (SPADs) outperform among relevant time-resolved imaging technologies thanks to their excellent photon sensitivity and superior temporal resolution on the order of tens of picoseconds. The capability of exceeding the sensing limits of conventional cameras for SPADs also draws attention in photon-efficient imaging area. However, photon-efficient imaging under degraded conditions with low photon counts and low singal-to-background ratio (SBR) still remains an inevitable challenge. \n In this paper, we propose a spatio-temporal transformer network for photon-efficient imaging under low-flux scenarios. In particular, we introduce a view-interweaved attention mechanism (VIAM) to both extract spatial-view and temporal-view self-attention in each transformer block. We also design an adaptive-weighting scheme to dynamically adjust the weights between different views of self-attention in VIAM for different signal-to-background levels. We both extensively validate and demonstrate the effectiveness of our approach on the simulated Middlebury dataset and on a specially self-collected dataset with real-world captured SPAD measurements and well-annotated ground truth depth maps.",
        imgs: [
            { src: 'image.png' },
        ],
        links: [

        ],
        video: '',
    },
    {
        authors: 'Zhiling Cui, Haiyang Mei, Wen Dong, Ziqi Wei, Zheng Lv, Dongsheng Zhou, Xin Yang*',
        title: 'Steel Sheet Counting from an Image with a Two-Stream Network',
        tags: [
            ['IEEE TIM', 1],
            ['.', 0],
            ['(ELECTRICAL & ELECTRONIC领域Top期刊)', 2]
        ],
        abstract: "Steel sheets play a pivotal role in a wide range of industrial processes, including the production of ships and vehicles, as well as the construction of buildings and bridges. Meanwhile, counting steel sheets accurately is essential for effective production management in factories. However, manual counting large numbers of stacked steel sheets can lead to visual vertigo, resulting in inaccurate counts. Moreover, physical methods like weighing are also labor-intensive and inconvenient. Fortunately, advancements in computer vision technology have opened up new possibilities for efficient steel sheets counting. Nevertheless, implementing an automatic counting method encounters challenges due to the limited texture features present in steel sheets. In this paper, we present a novel approach to count steel sheets from a captured image. To the best of our knowledge, this is the pioneering work that address this problem using a computational approach. We make the following contributions. First, we construct a comprehensive steel sheets dataset that contains steel sheets images with corresponding manually annotated dots. Second, we propose a novel network, called TSNet, which effectively extracts features from both the RGB image and its gradient map for precise steel sheet counting. Third, we conduct extensive experiments to evaluate the effectiveness of our proposed method and demonstrate its superiority over carefully chosen baselines from state-of-the-art counting methods..",
        imgs: [
            { src: '1-Dataset_category.png' },
            { src: '2-TSNet.png' },
            { src: '3-Visual comparison.png' },
            { src: '4-Box.png' },
        ],
        links: [

        ],
        video: '',
    },

]