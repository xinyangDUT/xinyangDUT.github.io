a = {
    authors:
        'Xin Yang, Ke Xu, Shaozhe Chen, Shengfeng He, Baocai Yin, Rynson W.H. Lau.',
    title:
        'Active Matting.',
    tags: [
        ['NeurIPS 2018', 1],
        ['. ', 0],
        ['(CCF A)', 2]
    ],
    io: 'Given an input RGB image, our network directly produces an Alpha Matte with only a few points.',
    abstract: 'Image matting is an ill-posed problem. It requires a user input trimap or some strokes to obtain an alpha matte of the foreground object. A fine user input is essential to obtain a good result, which is either time consuming or suitable for experienced users who know where to place the strokes. In this paper, we explore the intrinsic relationship between the user input and the matting algorithm to address the problem of where and when the user should provide the input. Our aim is to discover the most informative sequence of regions for user input in order to produce a good alpha matte with minimum labeling efforts. To this end, we propose an active matting method with recurrent reinforcement learning. The proposed framework involves human in the loop by sequentially detecting informative regions for trivial human judgement. Comparing to traditional matting algorithms, the proposed framework requires much less efforts, and can produce satisfactory results with just 10 regions. Through extensive experiments, we show that the proposed model reduces user efforts significantly and achieves comparable performance to dense trimaps in a user-friendly manner. We further show that the learned informative knowledge can be generalized across different matting algorithms.',
    links: [
        { name: 'paper', link: 'http://papers.neurips.cc/paper/7710-active-matting.pdf' },
        { name: 'suppl', link: 'https://papers.nips.cc/paper/7710-active-matting-supplemental.zip' },
        { name: 'poster', link: 'http://www.cs.cityu.edu.hk/~rynson/papers/demos/nips18poster.pdf' },
        { name: 'dataset', link: 'http://www.cs.cityu.edu.hk/~rynson/papers/demos/rendered-100.zip' },
        { name: 'video', link: 'https://youtu.be/QcCBvS79fNE' }
    ],
    imgs: [
        { src: 'NIPS_pipeline.png', label: 'Overview of proposed framework.' },
        { src: 'NIPS_results.png', label: 'Visual comparison of our results with those of the state-of-the-art methods. Please zoom in to see the details.' },
    ],
}

directions1: [
    {
        title: "a.  复杂场景的视觉感知（图像超分、去雨、暗光增强、信息重建/生成）(Visual Perception in Complex Scenes (Image Super-Resolution, De-Raining, Low-Light Enhancement, Reconstruction/Generation))",
        domains: [
            {
                title: "i.   图像超分(Image Super-Resolution)",
                projects: [
                    {
                        id: 0,
                        authors:
                            'Haiyin Piao, Pengyuan Du, Qi Liu, Letian Yu, Yang Sun, Yuxin Wang, Xin Yang*.',
                        title:
                            'MBKD: Acceleration Structure Designed for Moving Primitives.',
                        tags: [
                            ['Computers & Graphics 2021', 1],
                            ['. ', 0],
                        ],
                        imgs: [
                            { src: 'MBKD.png' }
                        ],
                        abstract: 'We present a k-d tree construction algorithm designed to accelerate rendering of scenes with motion blur, in application scenarios where a k-d tree is either required or desired. Our associated data structure focuses on capturing incoherent motion within the nodes of a k-d tree and improves both data structure quality and efficiency over previous methods. At building time, we track primitives with motion that is significantly distinct from other primitives within the node, guarantee valid node references and the correctness of the data structure via primitive duplication heuristic and propagation rules. Then, we incorporate filtering heuristics to limit the propagation of primitives, and eliminate some incorrect duplicated references that may invalidate node references. We also demonstrate a strategy for updating existing MBKD for animated scenes. Our experiments with this hierarchy show artifact-free motion-blur rendering using a k-d tree, and demonstrate improvements against a traditional BVH with interpolation and a MSBVH structure designed to handle moving primitives, particularly in render time.'
                    },
                ]
            },
            {
                title: "ii.  去雨(De-Raining)",
                projects: [
                    {
                        id: 1,
                        authors:
                            'Xin Yang, Wenbo Hu, Dawei Wang, Lijing Zhao, Baocai Yin, Qiang Zhang, Xiaopeng Wei, Hongbo Fu.',
                        title:
                            'DEMC: A Deep Dual-Encoder Network for Denoising Monte Carlo Rendering.',
                        tags: [
                            ['Journal of Computer Science and Technology 2019. (Special Issue of CVM)', 1],
                            ['. (Special Issue of CVM), 34(5): 1123-1135. ', 0],
                            ['(CCF B)', 2],
                        ],
                        links: [
                            {
                                name: 'paper',
                                link: 'https://arxiv.org/pdf/1905.03908.pdf',
                            },
                            {
                                name: 'suppl',
                                link:
                                    'https://drive.google.com/file/d/1UyJYe1JoopIb-QwDqHgi6wBAmF2NT_Mi/view',
                            },
                            {
                                name: 'code',
                                link: 'https://github.com/wbhu/DEMC',
                            },
                            {
                                name: 'dataset',
                                link: 'https://sites.google.com/view/dutdemc',
                            },
                        ],
                        imgs: [
                            { src: 'A Deep Dual-Encoder Network for Denoising Monte Carlo Rendering.png' },
                            { src: 'A Deep Dual-Encoder Network for Denoising Monte Carlo Rendering.gif' }
                        ],
                        abstract: 'In this paper, we present DEMC, a deep Dual-Encoder network to remove Monte Carlo noise efficiently while preserving details. Denoising Monte Carlo rendering is different from natural image denoising since inexpensive by-products (feature buffers) can be extracted in the rendering stage. Most of them are noise-free and can provide sufficient details for image reconstruction. However, these feature buffers also contain redundant information, which makes Monte Carlo denoising different from natural image denoising. Hence, the main challenge of this topic is how to extract useful information and reconstruct clean images. To address this problem, we propose a novel network structure, Dual-Encoder network with a feature fusion sub-network, to fuse feature buffers firstly, then encode the fused feature buffers and a noisy image simultaneously, and finally reconstruct a clean image by a decoder network. Compared with the state-of-the-art methods, our model is more robust on a wide range of scenes and is able to generate satisfactory results in a significantly faster way.'
                    },
                ]
            },
            {
                title: "iii.	图像增强(Image Enhancement)",
                projects: [
                    {
                        id: 1,
                        authors:
                            'Xin Yang, Wenbo Hu, Dawei Wang, Lijing Zhao, Baocai Yin, Qiang Zhang, Xiaopeng Wei, Hongbo Fu.',
                        title:
                            'DEMC: A Deep Dual-Encoder Network for Denoising Monte Carlo Rendering.',
                        tags: [
                            ['Journal of Computer Science and Technology 2019. (Special Issue of CVM)', 1],
                            ['. (Special Issue of CVM), 34(5): 1123-1135. ', 0],
                            ['(CCF B)', 2],
                        ],
                        links: [
                            {
                                name: 'paper',
                                link: 'https://arxiv.org/pdf/1905.03908.pdf',
                            },
                            {
                                name: 'suppl',
                                link:
                                    'https://drive.google.com/file/d/1UyJYe1JoopIb-QwDqHgi6wBAmF2NT_Mi/view',
                            },
                            {
                                name: 'code',
                                link: 'https://github.com/wbhu/DEMC',
                            },
                            {
                                name: 'dataset',
                                link: 'https://sites.google.com/view/dutdemc',
                            },
                        ],
                        imgs: [
                            { src: 'A Deep Dual-Encoder Network for Denoising Monte Carlo Rendering.png' },
                            { src: 'A Deep Dual-Encoder Network for Denoising Monte Carlo Rendering.gif' }
                        ],
                        abstract: 'In this paper, we present DEMC, a deep Dual-Encoder network to remove Monte Carlo noise efficiently while preserving details. Denoising Monte Carlo rendering is different from natural image denoising since inexpensive by-products (feature buffers) can be extracted in the rendering stage. Most of them are noise-free and can provide sufficient details for image reconstruction. However, these feature buffers also contain redundant information, which makes Monte Carlo denoising different from natural image denoising. Hence, the main challenge of this topic is how to extract useful information and reconstruct clean images. To address this problem, we propose a novel network structure, Dual-Encoder network with a feature fusion sub-network, to fuse feature buffers firstly, then encode the fused feature buffers and a noisy image simultaneously, and finally reconstruct a clean image by a decoder network. Compared with the state-of-the-art methods, our model is more robust on a wide range of scenes and is able to generate satisfactory results in a significantly faster way.'
                    },
                ]
            },
            {
                title: "iv.	信息重建/生成(Reconstruction/Generation)",
                projects: [
                    {
                        id: 1,
                        authors:
                            'Xin Yang, Wenbo Hu, Dawei Wang, Lijing Zhao, Baocai Yin, Qiang Zhang, Xiaopeng Wei, Hongbo Fu.',
                        title:
                            'DEMC: A Deep Dual-Encoder Network for Denoising Monte Carlo Rendering.',
                        tags: [
                            ['Journal of Computer Science and Technology 2019. (Special Issue of CVM)', 1],
                            ['. (Special Issue of CVM), 34(5): 1123-1135. ', 0],
                            ['(CCF B)', 2],
                        ],
                        links: [
                            {
                                name: 'paper',
                                link: 'https://arxiv.org/pdf/1905.03908.pdf',
                            },
                            {
                                name: 'suppl',
                                link:
                                    'https://drive.google.com/file/d/1UyJYe1JoopIb-QwDqHgi6wBAmF2NT_Mi/view',
                            },
                            {
                                name: 'code',
                                link: 'https://github.com/wbhu/DEMC',
                            },
                            {
                                name: 'dataset',
                                link: 'https://sites.google.com/view/dutdemc',
                            },
                        ],
                        imgs: [
                            { src: 'A Deep Dual-Encoder Network for Denoising Monte Carlo Rendering.png' },
                            { src: 'A Deep Dual-Encoder Network for Denoising Monte Carlo Rendering.gif' }
                        ],
                        abstract: 'In this paper, we present DEMC, a deep Dual-Encoder network to remove Monte Carlo noise efficiently while preserving details. Denoising Monte Carlo rendering is different from natural image denoising since inexpensive by-products (feature buffers) can be extracted in the rendering stage. Most of them are noise-free and can provide sufficient details for image reconstruction. However, these feature buffers also contain redundant information, which makes Monte Carlo denoising different from natural image denoising. Hence, the main challenge of this topic is how to extract useful information and reconstruct clean images. To address this problem, we propose a novel network structure, Dual-Encoder network with a feature fusion sub-network, to fuse feature buffers firstly, then encode the fused feature buffers and a noisy image simultaneously, and finally reconstruct a clean image by a decoder network. Compared with the state-of-the-art methods, our model is more robust on a wide range of scenes and is able to generate satisfactory results in a significantly faster way.'
                    },
                ]
            },

        ]
    },
]

directions2: [
    {
        title: "b.	复杂场景的视觉理解（显著性目标检测、混淆目标分割、精细化分割）(Visual Understanding in Complex Scenes (Salient Object Detection, Confusing Object Segmentation, Fine-Grained Segmentation))",
        domains: [
            {
                title: "i. 对象建模",
                projects: [
                    {
                        id: 2,
                        authors: 'Wanchao Su, Dong Du, Xin Yang, Shizhe Zhou, Hongbo Fu.',
                        title:
                            'Interactive Sketch-Based Normal Map Generation with Deep Neural Networks.',
                        tags: [
                            ['ACM SIGGRAPH Symposium on Interactive 3D Graphics and Games (I3D)', 1],
                            [', 2018. ', 0],
                            ['(CCF B)', 2]
                        ],
                        links: [
                            {
                                name: 'paper',
                                link:
                                    'http://sweb.cityu.edu.hk/hongbofu/doc/sketch2normal_i3D2018.pdf',
                            },
                            {
                                name: 'video',
                                link: 'https://youtu.be/-Fl3Yav5FFI',
                            },
                            {
                                name: 'code',
                                link: 'https://github.com/Ansire/sketch2normal',
                            },
                            {
                                name: 'data',
                                link:
                                    'http://sweb.cityu.edu.hk/hongbofu/data/datasets.tar.gz',
                            },
                            {
                                name: 'media: Seamless',
                                link: 'https://shiropen.com/seamless-3dcg-interactive-sketch',
                            },
                        ],
                        imgs: [
                            { src: 'Interactive Sketch-Based Normal Map Generation with Deep Neural Networks.jpg' }
                        ],
                        abstract: 'High-quality normal maps are important intermediates for representing complex shapes. In this paper, we propose an interactive system for generating normal maps with the help of deep learning techniques. Utilizing the Generative Adversarial Network (GAN) framework, our method produces high quality normal maps with sketch inputs. In addition, we further enhance the interactivity of our system by incorporating user-specified normals at selected points. Our method generates high quality normal maps in real time. Through comprehensive experiments, we show the effectiveness and robustness of our method. A thorough user study indicates the normal maps generated by our method achieve a lower perceptual difference from the ground truth compared to the alternative methods.'
                    },
                    {
                        id: 3,
                        authors:
                            'Yang Xin, Liu Qi, Yin Baocai, Zhang Qiang, Wei Xiaopeng.',
                        title: 'A K-D Tree Construction Designed for Motion Blur.',
                        tags: [
                            ['28th Eurographics Symposium on Rendering (EGSR)', 1],
                            [', Helsinki, Finland, 2017, 113-119. ', 0],
                            ['(CCF B)', 2]
                        ],
                        imgs: [
                            { src: 'A K-D Tree Construction Designed for Motion Blur.gif' }
                        ],
                        abstract: 'We present a k-d tree construction algorithm designed to accelerate rendering of scenes with motion blur, in application scenarios where a k-d tree is either required or desired. Our associated data structure focuses on capturing incoherent motion within the nodes of a k-d tree and improves both data structure quality and efficiency over previous methods. At build-time stage, we tracks primitives with motion that is significantly distinct from other primitives within the node, guarantee valid node references and the correctness of the data structure via primitive duplication heuristic and propagation rules. Our experiments with this hierarchy show artifact-free motion-blur rendering using a k-d tree, and demonstrate improvements against a traditional BVH with interpolation and a MSBVH structure designed to handle moving primitives, particularly in render time.'
                    },
                ]
            },
            {
                title: "ii. 场景渲染",
                projects: [
                    {
                        id: 4,
                        authors:
                            'Yang Xin, Liu Qi, Zhang Pengfei, Xin Lutong, Zhou Dongsheng, Wang Yuxin, Zhang Qiang, Wei Xiaopeng.',
                        title: 'DKD: A Fast KD-Tree Update Design for Dynamic Scenes.',
                        tags: [
                            ["Journal of Computer Animation and Virtual Worlds (Special Issue of CASA 2016, Geneva, Switzerland)", 1],
                            [', 2016, 27(4): 340-350. ', 0],
                            ['(SCI)', 2],
                        ],
                        imgs: [
                            { src: 'DKD A Fast KD-Tree Update Design for Dynamic Scenes.gif' }
                        ],
                        abstract: 'We design dynamic k -d (DKD) tree based on classical k -d tree for animated scene rendering. Our method can inherit the benefit of efficient traversal of k -d tree and minimize time cost to update DKD tree, making it well suited for animated geometry. DKD employs primitive reset, redistribution to reflect the updated positions of geometry, and leaf node incremental growing to avoid the deterioration of hierarchy quality due to refitting. Our experiments show that DKD has a significant rendering performance improvement than selected existing methods. Copyright 2016 John Wiley & Sons, Ltd.'
                    },
                ]

            }
        ]
    }
]

    