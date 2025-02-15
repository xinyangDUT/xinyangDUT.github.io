


const projects = [
  {
    title: 'Scene 3D Reconstruction and Generation',
    href: 'Scene_3D_Reconstruction_and_Generation/index.html',
  },
  {
    title: 'Visual Perception and Understanding in Complex Scenes',
    href: 'Visual_Perception_and_Understanding_in_Complex_Scenes/index.html',
  },
  {
    title: 'Intelligent Human-Computer Interaction Systems',
    href: 'Intelligent_Human-Computer_Interaction_Systems/index.html',
  },
  {
    title: 'Rendering and Simulation',
    href: 'rendering_and_simulation/index.html',
  },
  {
    title: 'Camera Intelligence',
    href: 'camera_intelligence/index.html',
  },
  {
    title: 'Embodied Robotic Systems and Bio-inspired Intelligence',
    href: 'Bio-inspired_Intelligence_and_Embodied_Robotic_Systems/index.html',
  },
  {
    title: 'Knowledge Graphs and Large Models',
    href: 'Knowledge_Graphs_and_Large_Models/index.html',
  },
  {
    title: 'Teaching',
    href: 'teaching/index.html',
  },

]
var publications = [
  {
    authors: 'Zhiling Cui, Haiyang Mei, Wen Dong, Ziqi Wei, Zheng Lv, Dongsheng Zhou, Xin Yang*',
    title: 'Steel Sheet Counting from an Image with a Two-Stream Network',
    tags: [
      ['IEEE TIM 2025', 1],
      ['.', 0],
      ['(ELECTRICAL & ELECTRONIC领域Top期刊)', 2]
    ],
    href: 'Scene_3D_Reconstruction_and_Generation/index.html#',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Letian Yu, Jiaxi Yang, Bo Dong, Qirui Bao, Yuanbo Wang, Felix Heide, Xiaopeng Wei, Xin Yang*.',
    title: 'Separating the Wheat from the Chaff: Spatio-Temporal Transformer with View-interweaved Attention for Photon-Efficient Depth Sensing.',
    tags: [
      ['AAAI 2025', 1],
      ['.', 0],
      ['(CCF A)', 2]
    ],
    href: 'Scene_3D_Reconstruction_and_Generation/index.html#',
    class: "camera_intelligence"
  },
  {
    authors: 'Yuanbo Wang, Shanglai Qu, Tianyu Meng, Yan Cui, Haiyin Piao, XiaoPeng Wei*, Xin Yang*.',
    title: 'Event-intensity Stereo with Cross-modal Fusion and Contrast.',
    tags: [
      ['International Conference on Intelligent Robots and Systems (IROS) 2025', 1],
    ],
    href: 'Scene_3D_Reconstruction_and_Generation/index.html#',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Nannan Yu, Tao Ma, Jiqing Zhang, Yuji Zhang, Qirui Bao, Xiaopeng Wei, Xin Yang*.',
    title: 'Adaptive Vision Transformer for Event-Based Human Pose Estimation.',
    tags: [
      ['ACM International Conference on Multimedia 2024', 1],
      ['.', 0],
      ['(CCF A)', 2]
    ],
    href: 'Scene_3D_Reconstruction_and_Generation/index.html#',
    class: "camera_intelligence"
  },
  {
    authors: 'Hu Lin, Chengjiang Long*, Yifeng Fei, Qianchen Xia*, Erwei Yin, Baocai Yin, Xin Yang*.',
    title: 'Exploring Matching Rates: From Keypoint Selection to Camera Relocalization.',
    tags: [
      ['The Visual Computer 2024', 1],
      ['. ', 0],
    ],
    href: 'Scene_3D_Reconstruction_and_Generation/index.html#',
    class: "Intelligent_Human-Computer_Interaction_Systems"
  },
  {
    authors: 'Tong Li, Zhaoxuan Zhang, Yuxin Wang, Yan Cui, Yuqi Li, Dongsheng Zhou, Baocai Yin, Xin Yang*.',
    title: 'Self-supervised indoor scene point cloud completion from a single panorama.',
    tags: [
      ['The Visual Computer 2024', 1],
      ['. ', 0],
    ],
    href: 'Scene_3D_Reconstruction_and_Generation/index.html#',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Yang Wang, Haiyang Mei, Qirui Bao, Ziqi Wei, Mike Zheng Shou, Haizhou Li, Bo Dong, Xin Yang*.',
    title: 'Apprenticeship-Inspired Elegance: Synergistic Knowledge Distillation Empowers Spiking Neural Networks for Efficient Single-Eye Emotion Recognition.',
    tags: [
      [' IJCAI 2024', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'Intelligent_Human-Computer_Interaction_Systems/index.html#',
    class: "Intelligent_Human-Computer_Interaction_Systems"
  },
  {
    authors: 'Jingcheng Jiang, Haiyin Piao, Yu Fu, Yihang Hao, Chuanlu Jiang, Ziqi Wei∗, Xin Yang∗.',
    title: 'Phasic Diversity Optimization for Population-Based Reinforcement Learning.',
    tags: [
      ['IEEE International Conference on Robotics and Automation (ICRA) 2024', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'Bio-inspired_Intelligence_and_Embodied_Robotic_Systems/index.html#',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Wen Dong, Haiyang Mei, Ziqi Wei, Ao Jin, Sen Qiu, Qiang Zhang, Xin Yang*.',
    title: 'Exploiting Polarized Material Cues for Robust Car Detection.',
    tags: [
      ['AAAI 2024', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'detection_segmentation/index.html#1',
    class: "camera_intelligence"
  },
  {
    authors: 'Jiqing Zhang, Bo Dong, Yingkai Fu, Yuanchen Wang, Xiaopeng Wei, BaocaiYin, Xin Yang*.',
    title: 'A Universal Event-based Plug-in Module for Visual Object Tracking in Degraded Conditions.',
    tags: [
      ['International Journal of Computer Vision (IJCV) 2024', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'intelligent_bionic_system/index.html#2',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Yingkai Fu, Meng Li, Wenxi Liu, Yuanchen Wang, Jiqing Zhang, Baocai Yin, Xiaopeng Wei, Xin Yang†.',
    title: 'Distractor-aware Event-based Tracking.',
    tags: [
      ['IEEE Transactions on Image Processing 2024', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'intelligent_bionic_system/index.html#3',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Yu Qiao, Bo Dong, Ao Jin, Yu Fu, Seung-Hwan Baek, Felix Heide, Pieter Peers, Xiaopeng Wei, Xin Yang*.',
    title: 'Multi-view Spectral Polarization Propagation for Video Glass Segmentation.',
    tags: [
      ['ICCV 2023', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'detection_segmentation/index.html#1',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Jiqing Zhang, Yuanchen Wang , Wenxi Liu, Meng Li, Jinpeng Bai, Baocai Yin, Xin Yang*. ',
    title: 'Frame-Event Alignment and Fusion Network for High Frame Rate Tracking.',
    tags: [
      ['CVPR 2023', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'intelligent_bionic_system/index.html#4',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Zhaoxuan Zhang, Bo Dong, Tong Li, Felix Heide, Pieter Peers, Baocai Yin, Xin Yang*.',
    title: 'Single Depth-image 3D Reflection Symmetry and Shape Prediction.',
    tags: [
      ['ICCV 2023', 1],
      ['. ', 0],
      ['(CCF A)', 2],
    ],
    href: '3DV/index.html#1',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Yang Wang, Bo Dong, Yuji Zhang, Yunduo Zhou, Haiyang Mei, Ziqi Wei, Xin Yang*.',
    title: 'Event-Enhanced Multi-Modal Spiking Neural Network for Dynamic Obstacle Avoidance.',
    tags: [
      ['ACM International Conference on Multimedia (ACM MM) 2023', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'intelligent_bionic_system/index.html#5',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Haiyang Mei, Ke Xu, Yunduo Zhou, Yang Wang, Haiyin Piao, Xiaopeng Wei, Xin Yang*.',
    title: 'Camouflaged Object Segmentation with Omni Perception.',
    tags: [
      ['International Journal of Computer Vision (IJCV) 2023', 1],
      ['. ', 0],
      ['(CCF A)', 2]],
    href: 'detection_segmentation/index.html#2',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: '梅海洋, 杨鑫*, 周运铎, 季葛鹏, 魏小鹏, 范登平.',
    title: '分心感知的伪装目标分割.',
    tags: [
      ['中国科学: 信息科学', 1],
      ['. ', 0],
      ['(CCF A类中文期刊)', 2]
    ],
    href: 'detection_segmentation/index.html#3',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Haiwei Zhang, Jiqing Zhang, Bo Dong, Pieter Peers, Wenwei Wu, Xiaopeng Wei, Felix Heide, Xin Yang*.',
    title: 'In the Blink of an Eye: Event-based Emotion Recognition.',
    tags: [
      ['SIGGRAPH 2023', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'intelligent_bionic_system/index.html#6',
    class: "Intelligent_Human-Computer_Interaction_Systems"
  },
  {
    authors: 'Boyan Wei, Xianfeng Ye, Chengjiang Long, Zhenjun Du, Bangyu Li, Baocai Yin, Xin Yang*.',
    title: 'Discriminative Active Learning for Robotic Grasping in Cluttered Scene.',
    tags: [
      ['IEEE Robotics and Automation Letters (RA-L) 2023', 1],
      ['. ', 0]
    ],
    href: 'intelligent_bionic_system/index.html#8',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Yang Wang, Bo Dong, Ke Xu, Haiyin Piao, Yufei Ding, Baocai Yin, Xin Yang†.',
    title: 'A Geometrical Approach to Evaluate the Adversarial Robustness of Deep Neural Networks.',
    tags: [
      ['ACM Transactions on Multimedia Computing, Communications, and Applications (TOMM) 2023', 1],
      ['. ', 0]
    ],
    href: 'intelligent_bionic_system/index.html#7',
    class: "Intelligent_Human-Computer_Interaction_Systems"
  },
  {
    authors: 'Zhaoxuan Zhang, Xiaoguang Han, Bo Dong, Tong Li, Baocai Yin, Xin Yang*.',
    title: 'Point Cloud Scene Completion with Joint Color and Semantic Estimation from Single RGB-D Image.',
    tags: [
      ['IEEE Transactions on Pattern Analysis and Machine Intelligence 2023', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: '3DV/index.html#2',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Yu Qiao*, Jincheng Zhu*, Chengjiang Long, Zeyao Zhang, Yuxin Wang, Zhenjun Du, Xin Yang†.',
    title: 'CPRAL: Collaborative Panoptic-Regional Active Learning for Semantic Segmentation.',
    tags: [
      ['AAAI 2022', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'scene_understanding/index.html#0',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Haiyang Mei, Letian Yu, Ke Xu, Yang Wang, Xin Yang†, Xiaopeng Wei, Rynson W.H. Lau.',
    title: 'Mirror Segmentation via Semantic-Aware Contextual Contrasted Feature Learning. ACM Transactions on Multimedia Computing.',
    tags: [
      ['Communications and Applications (TOMM) 2022', 1],
      ['. ', 0]
    ],
    href: 'detection_segmentation/index.html#4',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Haiyang Mei, Bo Dong, Wen Dong, Jiaxi Yang, Seung-Hwan Baek, Felix Heide, Pieter Peers, Xiaopeng Wei, Xin Yang*.',
    title: 'Glass Segmentation using Intensity and Spectral Polarization Cues.',
    tags: [
      ['CVPR 2022', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'detection_segmentation/index.html#5',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Yu Qiao*, Yuhao Liu*, Ziqi Wei, Yuxin Wang, Qiang Cai, Guofeng Zhang, Xin Yang†.',
    title: 'Hierarchical and Progressive Image Matting.',
    tags: [
      ['ACM Transactions on Multimedia Computing, Communications, and Applications(TOMM) 2022', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'matting/index.html#0',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Xin Tian, Ke Xu, Xin Yang*, Lin Du, Baocai Yin, Rynson W.H. Lau.',
    title: 'Bi-directional Object-Context Prioritization Learning for Saliency Ranking.',
    tags: [
      ['CVPR 2022', 1],
      ['. ', 0]
    ],
    href: 'detection_segmentation/index.html#6',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Letian Yu*, Haiyang Mei*, Wen Dong, Ziqi Wei, Li Zhu, Yuxin Wang, and Xin Yang†.',
    title: 'Progressive Glass Segmentation.',
    tags: [
      ['IEEE Transactions on Image Processing 2022', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'detection_segmentation/index.html#7',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Haiyang Mei, Xin Yang*, Letian Yu, Qiang Zhang, Xiaopeng Wei, and Rynson W.H. Lau.',
    title: 'Large-Field Contextual Feature Learning for Glass Detection.',
    tags: [
      ['IEEE Transactions on Pattern Analysis and Machine Intelligence 2022', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'detection_segmentation/index.html#8',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Yuanyuan Liu, Chengjiang Long, Zhaoxuan Zhang, Bokai Liu, Qiang Zhang, Baocai Yin, and Xin Yang*.',
    title: 'Explore Contextual Information for 3D Scene Graph Generation.',
    tags: [
      ['IEEE Transactions on Visualization and Computer Graphics 2022', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: '3DV/index.html#3',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Jianchuan Ding, Bo Dong, Felix Heide, Yufei Ding, Yunduo Zhou, Baocai Yin, Xin Yang*.',
    title: 'Biologically Inspired Dynamic Thresholds for Spiking Neural Networks.',
    tags: [
      ['NeurIPS 2022', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'intelligent_bionic_system/index.html#9',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Hu Lin, Meng Li, Qianchen Xia, Yifeng Fei, Baocai Yin, Xin Yang*.',
    title: '6-DoF Pose Relocalization for Event Cameras With Entropy Frame and Attention Networks.',
    tags: [
      ['ACM SIGGRAPH VRCAI 2022', 1],
      ['. ', 0]
    ],
    href: 'intelligent_bionic_system/index.html#10',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Jianchuan Ding, Lingping Gao, Wenxi Liu, Haiyin Piao, Jia Pan, Zhenjun Du, Xin Yang*, Baocai Yin.',
    title: 'Monocular Camera-based Complex Obstacle Avoidance via Efficient Deep Reinforcement Learning.',
    tags: [
      ['IEEE Transactions on Circuits and Systems for Video Technology 2022', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'intelligent_bionic_system/index.html#11',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Jiqing Zhang, Bo Dong, Haiwei Zhang, Jianchuan Ding, Felix Heide, Baocai Yin, Xin Yang*.',
    title: 'Spiking Transformers for Event-based Single Object Tracking.',
    tags: [
      ['CVPR 2022', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'intelligent_bionic_system/index.html#12',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Yu Qiao*, Ziqi Wei*, Yuhao Liu, Yuxin Wang†, Dongsheng Zhou, Qiang Zhang, Xin Yang*.',
    title: 'Wider and Higher: Intensive Integration and Global Foreground Perception for Image Matting.',
    tags: [
      ['Computer Graphics International(CGI) 2022', 1],
      ['. ', 0]
    ],
    href: 'matting/index.html#1',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: '朱强, 王超毅, 张吉庆, 尹宝才, 魏小鹏, 杨鑫*.',
    title: '基于事件相机的无人机目标跟踪.',
    tags: [
      ['浙江大学学报（理学版. 2022, 49(01)', 1],
      ['. ', 0]
    ],
    href: 'intelligent_bionic_system/index.html#13',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Xin Tian, Ke Xu, Xin Yang†, Baocai Yin, Rynson Lau.',
    title: 'Learning to Detect Instance-level Salient Objects using Complementary Image Labels. International Journal of Computer Vision 2021.',
    tags: [
      ['(CCF A)', 2],
      ['. ', 0]
    ],
    href: 'detection_segmentation/index.html#9',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Lei Zhu, Xiaoqing Wang, Ping Li, Xin Yang*, Qing Zhang, Weiming Wang, Schönlieb, Carola-Bibiane, Chen, C.L. Philip.',
    title: 'Self-supervised Self-ensembling Network for Semi-supervised RGB-D Salient Object Detection.',
    tags: [
      ['IEEE Transactions on Multimedia 2021', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'detection_segmentation/index.html#10',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Chengyu Zheng, Shi Ding, Mingqiang Wei, Xin Yang*, Yanwen Guo, Haoran Xie, Xuefeng Yan.',
    title: 'Label Decoupling-based Three-stream Neural Network for Robust Glass Detection.',
    tags: [
      ['Computer Graphics Forum (CGF) (Special Issue of Pacific Graphics 2021, Wellington, New Zealand)', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'detection_segmentation/index.html#11',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Haiyang Mei, Bo Dong, Wen Dong, Pieter Peers, Qiang Zhang, Xin Yang*, Xiaopeng Wei.',
    title: 'Depth-Aware Mirror Segmentation.',
    tags: [
      ['CVPR 2021', 1],
      ['. ', 0],
      ['(CCF A, Oral)', 2]
    ],
    href: 'detection_segmentation/index.html#12',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Haiyang Mei, Gepeng Ji, Ziqi Wei, Xin Yang*, Xiaopeng Wei, Dengping Fan.',
    title: 'Camouflaged Object Segmentation with Distraction Mining.',
    tags: [
      ['CVPR 2021', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'detection_segmentation/index.html#13',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Jiqing Zhang, Xin Yang*, Yingkai Fu, Xiaopeng Wei, Baocai Yin, Bo Dong.',
    title: 'Object Tracking by Jointly Exploiting Frame and Event Domain.',
    tags: [
      ['ICCV 2021', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'intelligent_bionic_system/index.html#14',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Jiqing Zhang, Kai Zhao, Bo Dong, Yingkai Fu, Xinglin Piao, Xin Yang*, Baocai Yin.',
    title: 'Multi-domain Collaborative Feature Representation for Robust Visual Object Tracking.',
    tags: [
      ['The Visual Computer (Proc. CGI 2021)', 1],
      ['. ', 0]
    ],
    href: 'intelligent_bionic_system/index.html#15',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Lingping Gao, Jianchuan Ding, Wenxi Liu, Haiyin Piao, Yuxin Wang, Xin Yang†, Baocai Yin.',
    title: 'A Vision-based Irregular Obstacle Avoidance Framework via Deep Reinforcement Learning.',
    tags: [
      ['IROS 2021', 1],
      ['. ', 0]
    ],
    href: 'intelligent_bionic_system/index.html#16',
    class: "Bio-inspired_Intelligence_and_Embodied_Robotic_Systems"
  },
  {
    authors: 'Yuhao Liu, Jiake Xie, Xiao Shi, Yu Qiao, Yujie Huang, Yong Tang, Xin Yang†.',
    title: 'Tripartite Information Mining and Integration for Image Matting.',
    tags: [
      ['ICCV 2021', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'matting/index.html#2',
    class: "rendering_and_simulation"
  },
  {
    authors: 'Yuhao Liu∗, Jiake Xie∗, Yu Qiao, and Yong Tang, Xin Yang†.',
    title: 'Prior-Induced Information Alignment for Image Matting.',
    tags: [
      ['IEEE Transactions on Multimedia(TMM) 2021', 1],
      ['. ', 0]
    ],
    href: 'matting/index.html#3',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Haiyang Mei, Yuanyuan Liu, Dongsheng Zhou, Xiaopeng Wei, Qiang Zhang, Xin Yang*.',
    title: 'Exploring Dense Context for Salient Object Detection.',
    tags: [
      ['IEEE Transactions on Circuits and Systems for Video Technology 2021', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'detection_segmentation/index.html#15',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Haiyin Piao, Pengyuan Du, Qi Liu, Letian Yu, Yang Sun, Yuxin Wang, Xin Yang*.',
    title: 'MBKD: Acceleration Structure Designed for Moving Primitives.',
    tags: [
      ['Computers & Graphics 2021', 1],
      ['. ', 0]
    ],
    href: 'photorealistic_rendering/index.html#0',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Yidan Feng, Sen Deng, Xuefeng Yan, Xin Yang, Mingqiang Wei, and Ligang Liu.',
    title: 'Easy2Hard: Learning to Solve the Intractables from a Synthetic Dataset for Structure-preserving Image Smoothing.',
    tags: [
      ['IEEE Transactions on Neural Networks and Learning Systems 2021', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'scene_understanding/index.html#1',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Ke Xu, Xin Tian, Xin Yang*, Baocai Yin, Rynson Lau.',
    title: 'Intensity-Aware Single-Image Deraining with Semantic and Color Regularization.',
    tags: [
      ['IEEE Transactions on Image Processing 2021', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'scene_understanding/index.html#2',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Jiqing Zhang, Chengjiang Long, Yuxin Wang, Haiyin Piao, Haiyang Mei, Xin Yang*, Baocai Yin.',
    title: 'A Two-Stage Attentive Network for Single Image Super-Resolution.',
    tags: [
      ['IEEE Transactions on Circuits and Systems for Video Technology 2021', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'SR/index.html#1',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Xin Tian, Ke Xu, Xin Yang*, Baocai Yin, Rynson Lau.',
    title: 'Weakly-supervised Salient Instance Detection.',
    tags: [
      ['BMVC 2020. (Oral, 5%, Best Student Paper)', 1],
      ['. ', 0]
    ],
    href: 'detection_segmentation/index.html#16',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Haiyang Mei, Xin Yang*, Yang Wang, Yuanyuan Liu, Shengfeng He, Qiang Zhang, Xiaopeng Wei, and Rynson Lau.',
    title: 'Don\'t Hit Me! Glass Detection in Real-world Scenes.',
    tags: [
      ['(2020) CVPR 2020', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'detection_segmentation/index.html#14',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Shimin Zhao, Miaomiao Chen, Pengjie Wang, Ying Cao, Pingping Zhang and Xin Yang*.',
    title: 'RGB-D Salient Object Detection via Deep Fusion of Semantics and Details.',
    tags: [
      ['Journal of Computer Animation and Virtual Worlds, Bournemouth, UK. (Special Issue of CASA 2020)', 1],
      ['. ', 0]
    ],
    href: 'detection_segmentation/index.html#17',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Sucheng Ren, Chu Han, Xin Yang*, Guoqiang Han, Shengfeng He.',
    title: 'TENet: Triple Excitation Network for Video Salient Object Detection.',
    tags: [
      ['ECCV 2020, Glasgow, UK. (Spotlight)', 1],
      ['. ', 0]
    ],
    href: 'detection_segmentation/index.html#18',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Zhaoxuan Zhang*, Kun Li*, Xuefeng Yin, Xinglin Piao, Yuxin Wang, Xin Yang, Baocai Yin.',
    title: 'Point Cloud Semantic Scene Segmentation based on Coordinate Convolution.',
    tags: [
      ['Journal of Computer Animation and Virtual Worlds,Special Issue of CASA 2020', 1],
      ['. ', 0]
    ],
    href: '3DV/index.html#4',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Xin Yang, Zongliang Ma, Letian Yu, Ying Cao, Baocai Yin, Xiaopeng Wei, Qiang Zhang and Rynson Lau.',
    title: 'Automatic Comic Generation with Stylistic Multi-page Layouts and Emotion-driven Text Balloon Generation.',
    tags: [
      ['ACM Transactions on Multimedia Computing, Communications, and Applications (TOMM) 2020', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'scene_understanding/index.html#3',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Hengfeng Zha, Dongsheng Zhou, Xin Yang*,Qiang Zhang,Xiaopeng Wei.',
    title: 'Reweighted Non-convex Non-smooth Rank Minimization based Spectral Clustering on Grassmann Manifold.',
    tags: [
      ['The 12th Asian Conference on Machine Learning (ACML) 2020', 1],
      ['. ', 0]
    ],
    href: 'scene_understanding/index.html#5',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Xinglin Piao, Yongli Hu, Junbin Gao, Yanfeng Sun, Xin Yang*, Baocai Yin.',
    title: 'Reweighted Non-convex Non-smooth Rank Minimization based Spectral Clustering on Grassmann Manifold.',
    tags: [
      ['The 15th Asian Conference on Computer Vision (ACCV) 2020, Kyoto, Japan', 1],
      ['. ', 0]
    ],
    href: 'scene_understanding/index.html#4',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Lei Chen, Rui Liu, Dongsheng Zhou, Yang Xin*, Qiang Zhang and Xiaopeng Wei.',
    title: 'A Human Behavior Recognition Model based on Extended Squeeze-and-Excitation Network.',
    tags: [
      ['CASA 2020, Bournemouth, UK', 1],
      ['. ', 0]
    ],
    href: 'scene_understanding/index.html#6',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Xiaoheng Jiang, Li Zhang, Mingliang Xu, Tianzhu Zhang, Pei Lv, Bing Zhou, Xin Yang*, Yanwei Pang.',
    title: 'Attention Scaling for Crowd Counting.',
    tags: [
      ['CVPR 2020, Seattle, USA', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'scene_understanding/index.html#7',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Yu Qiao, Yuhao Liu, Qiang Zhu, Xin Yang*, Yuxin Wang, Qiang Zhang, Xiaopeng Wei.',
    title: 'Multi-scale Information Assembly for Image Matting.',
    tags: [
      ['Computer Graphics Forum (CGF) (Special Issue of Pacific Graphics 2020, Wellington, New Zealand)', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'matting/index.html#4',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Yu Qiao* , Yuhao Liu*, Xin Yang†, Dongsheng Zhou, Mingliang Xu, Qiang Zhang, Xiaopeng Wei.',
    title: 'Attention-Guided Hierarchical Structure Aggregation for Image Matting.',
    tags: [
      ['CVPR 2020', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'matting/index.html#5',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Xinglin Piao, Yongli Hu, Junbin Gao, Yanfeng Sun, Xin Yang, Baocai Yin, Wenwu Zhu and Ge Li.',
    title: 'Kernel Clustering on Symmetric Positive Definite Manifolds via Double Approximated Low Rank Representation.',
    tags: [
      ['ICME 2020, London, UK', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'scene_understanding/index.html#8',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Jiqing Zhang, Chengjiang Long, Yuxin Wang, Xin Yang*, Haiyang Mei, and Baocai Yin.',
    title: 'Multi-Context And Enhanced Reconstruction Network For Single Image Super Resolution.',
    tags: [
      ['ICME 2020', 1],
      ['. ', 0]
    ],
    href: 'SR/index.html#0',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Xin Yang*, Yu Qiao*, Shaozhe Chen, Shengfeng He, Baocai Yin, Qiang Zhang, Xiaopeng Wei, Rynson W.H. Lau.',
    title: 'Smart Scribbles for Image Matting.',
    tags: [
      ['ACM Transactions on Multimedia Computing, Communications, and Applications(TOMM) 2020', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'matting/index.html#6',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Ke Xu, Xin Yang*, Baocai Yin, and Rynson Lau.',
    title: 'Learning to Restore Low-light Images via Decomposition-and-Enhancement.',
    tags: [
      ['CVPR 2020', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'enhancement/index.html#0',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Xin Yang, Haoran Wang, Shaozhe Chen, Xinglin Piao, Dongsheng Zhou, Qiang Zhang, Baocai Yin, Xiaopeng Wei.',
    title: 'Cascaded Network with Deep Intensity Manipulation for Scene Understanding.',
    tags: [
      ['Journal of Visualization and Computer Animation, 30(3-4), 2019', 1],
      ['. ', 0]
    ],
    href: 'enhancement/index.html#1',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Tianyu Wang*, Xin Yang*, Ke Xu, Shaozhe Chen, Qiang Zhang, and Rynson Lau.',
    title: 'Spatial Attentive Single-Image Deraining with a High Quality Real Rain Dataset.',
    tags: [
      ['CVPR 2019, Long Beach, USA', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'scene_understanding/index.html#9',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Xiaoguang Han, Zhaoxuan Zhang, Dong Du, Mingdai Yang, Jingming Yu, Pan Pan, Xin Yang, Ligang Liu, Zixiang Xiong and Shuguang Cui.',
    title: 'Deep Reinforcement Learning of Volume-guided Progressive View Inpainting for 3D Point Scene Completion from a Single Depth Image.',
    tags: [
      ['CVPR 2019', 1],
      ['.', 0],
      ['(Oral, CCF A)', 2]
    ],
    href: '3DV/index.html#5',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Xin Yang, Wenbo Hu, Dawei Wang, Lijing Zhao, Baocai Yin, Qiang Zhang, Xiaopeng Wei, Hongbo Fu.',
    title: 'DEMC: A Deep Dual-Encoder Network for Denoising Monte Carlo Rendering. Journal of Computer Science and Technology 2019.',
    tags: [
      ['(Special Issue of CVM). (Special Issue of CVM), 34(5): 1123-1135', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'photorealistic_rendering/index.html#1',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Xin Yang, Yuliang Wang, Shuai Li, Xinglin Piao, Baocai Yin, Qiang Zhang, Dongsheng Zhou, Xiaopeng Wei.',
    title: 'Real-Virtual Consistent Traffic Flow Interaction.',
    tags: [
      ['Graphical Model. 106, 2019', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'real_virtual/index.html#0',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Xin Yang*, Haiyang Mei*, Ke Xu, Xiaopeng Wei, Baocai Yin, and Rynson Lau (* joint first authors).',
    title: 'Where is My Mirror?',
    tags: [
      ['ICCV 2019', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'detection_segmentation/index.html#19',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Xin Yang, Ke Xu, Yibing Song, Qiang Zhang, Xiaopeng Wei, and Rynson Lau.',
    title: 'Image Correction via Deep Reciprocating HDR Transformation.',
    tags: [
      ['CVPR 2018', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'enhancement/index.html#2',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Xin Yang, Ke Xu, Shaozhe Chen, Shengfeng He, Baocai Yin, Rynson W.H. Lau.',
    title: 'Active Matting.',
    tags: [
      ['NeurIPS 2018', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: 'matting/index.html#7',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Xin Yang, Haiyang Mei, Jiqing Zhang, Ke Xu, Baocai Yin, Qiang Zhang, and Xiaopeng Wei.',
    title: 'DRFN: Deep Recurrent Fusion Network for Single Image Super-Resolution with Large Factors.',
    tags: [
      ['IEEE TRANSACTIONS ON MULTIMEDIA, August 2018', 1],
      ['. ', 0]
    ],
    href: 'SR/index.html#2',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Xin Yang, Shuai Li, Baocai Yin, Qiang Zhang, Guozhen Tan, Dongsheng Zhou, Xiaopeng Wei.',
    title: 'Vehicle Behaviors Simulation Technology Based on Neural Network.',
    tags: [
      ['(Eds. Cai, Yiyu, Van Joolingen, Walker, Zachary) VR, Simulations and Serious Games for Education. Springer, 2018, pp 67-84. (Chapter)', 1],
      ['. ', 0]
    ],
    href: 'real_virtual/index.html#1',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Xin Yang, Yuanbo Wang, Yaru Wang, Bacai Yin, Qian Zhang, Xiaopeng Wei and Hongbo Fu.',
    title: 'Active Object Reconstruction Using a Guided View Planner.',
    tags: [
      [' IJCAI 2018', 1],
      ['. ', 0],
      ['(CCF A)', 2]
    ],
    href: '3DV/index.html#6',
    class: "Scene_3D_Reconstruction_and_Generation"
  },
  {
    authors: 'Ke Xu, Xin Wang, Xin Yang*, Shengfeng He, Qiang Zhang, Baocai Yin, Xiaopeng Wei, and Rynson W.H Lau.',
    title: 'Efficient Image Super Resolution Integration.',
    tags: [
      ['The Visual Computer (Proc. CGI), June 2018', 1],
      ['. ', 0]
    ],
    href: 'SR/index.html#3',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  },
  {
    authors: 'Wanchao Su, Dong Du, Xin Yang, Shizhe Zhou, Hongbo Fu.',
    title: 'Interactive Sketch-Based Normal Map Generation with Deep Neural Networks.',
    tags: [
      ['ACM SIGGRAPH Symposium on Interactive 3D Graphics and Games (I3D), 2018', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'Scene_3D_Reconstruction_and_Generation/index.html#',
    class: "rendering_and_simulation"
  },
  {
    authors: 'Xin Yang, Shuai Li, Yong Zhang, Wanchao Su, Mingyue Zhang, Guozhen Tan, Qiang Zhang, Dongsheng Zhou, Xiaopeng Wei.',
    title: 'Interactive Traffic Simulation Model with Learned Local Parameters.',
    tags: [
      ['Multimedia Tools and Applications, 2017, 76(7): 9503-9516. (SCI)', 1],
      ['. ', 0]
    ],
    href: 'real_virtual/index.html#2',
    class: "rendering_and_simulation"
  },
  {
    authors: '杨鑫, 王大维, 王宇新, 白鑫, 葛宏伟, 夏浩.',
    title: '互补MOOC的主动式课堂建设方法探究.',
    tags: [
      ['现代教育技术. 2017, 27(1)：31-37. (CSSCI收录)', 1],
      ['. ', 0]
    ],
    href: 'other_research/index.html',
    class: "Teaching"
  },
  {
    authors: 'Yang Xin, Liu Qi, Yin Baocai, Zhang Qiang, Wei Xiaopeng.',
    title: 'A K-D Tree Construction Designed for Motion Blur.',
    tags: [
      ['28th Eurographics Symposium on Rendering (EGSR), Helsinki, Finland, 2017, 113-119', 1],
      ['. ', 0],
      ['(CCF B)', 2]
    ],
    href: 'photorealistic_rendering/index.html#3',
    class: "rendering_and_simulation"
  },
  {
    authors: 'Yang Xin, Liu Qi, Zhang Pengfei, Xin Lutong, Zhou Dongsheng, Wang Yuxin, Zhang Qiang, Wei Xiaopeng.',
    title: 'DKD: A Fast KD-Tree Update Design for Dynamic Scenes.',
    tags: [
      ['Journal of Computer Animation and Virtual Worlds (Special Issue of CASA 2016, Geneva, Switzerland), 2016, 27(4): 340-350. (SCI)', 1],
      ['. ', 0]
    ],
    href: 'photorealistic_rendering/index.html#4',
    class: "rendering_and_simulation"
  },
  {
    authors: 'Yang Xin, Su Wanchao, Deng Jian, Pan Zhigeng.',
    title: 'Real Traffic Data-Driven Animation Simulation.',
    tags: [
      [' ACM SIGGRAPH VRCAI, Kobe, Japan, 93-99, 2015.(Best Paper)', 1],
      ['. ', 0]
    ],
    href: 'real_virtual/index.html#3',
    class: "rendering_and_simulation"
  },
  {
    authors: 'Ke Xu, Xin Yang, Baocai Yin, Rynson Lau.',
    title: 'Decomposition-Guided Low-light Image Restoration and Enhancement.',
    tags: [
      ['(CCF A)', 2],
      ['. ', 0]
    ],
    href: 'enhancement/index.html#3',
    class: "Visual_Perception_and_Understanding_in_Complex_Scenes"
  }
];

