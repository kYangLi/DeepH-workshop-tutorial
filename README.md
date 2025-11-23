# Tutorial for DeepH-pack Workshop 2025

> `Authors: Yang Li (DeepH-pack training part), Bohen Zhao (DeepH-pack inference part), Honggeng Tao (DeepH-dock part), Zechen Tang (interface part) and Yong Xu (DeepH group leader)`

A hands-on tutorial for [**DeepH-pack**](https://www.nature.com/articles/s43588-022-00265-6) covering environment installation, dataset preparation, model training, inference, and universal material model odyssey!

**NOTE:** This tutorial utilizes a [JAX-based](https://github.com/jax-ml/jax) refactoring of DeepH, distinct from the legacy implementation available in [our public repository](https://github.com/mzjb/DeepH-pack).

![Head_figure](./figures/Head_Figure.jpg)


## Current status

The Deep-learning electronic Hamiltonian methods (DeepH) package is a deep-learning framework designed for neural-network modeling of DFT electronic Hamiltonians, developed by Prof. Yong Xu and Prof. Wenhui Duan’s group at the Department of Physics, Tsinghua University.
After five years of development, we are excited to announce the release of **the refactored version of DeepH**. Compared with previous open-sourced versions, this version has implemented our state-of-the-art architecture, and the code refactoring has resulted in comprehensive boost in both accuracy and efficiency.

Before we start, the users are recommended to refer to several dedicated DeepH Reviews or contributed Review chapters, including:

- **Deep-learning electronic structure calculations**: Review on deep-learning DFT and QMC, accepted and in press by *Nat. Comput. Sci.*
- **Advancing first-principles electronic structure calculations through deep-learning electronic Hamiltonian methods**: Contributing chapter of the "AI4X roadmap" (to be published), which focuses more on DeepH methods.
- Roadmap on Advancements of the FHI-aims Software Package: DeepH contributed **three paragraphs in Chapter 8.3** of the roadmap article of FHI-aims DFT code, reviewing and outlooking collarboration between DeepH and FHI-aims. [An arXiv version](https://arxiv.org/pdf/2505.00125) is available online.
- ABACUS: An Electronic Structure Analysis Package for the AI Era: DeepH contributed **section VI.D** to the roadmap article. [An arXiv version](https://arxiv.org/pdf/2501.08697) is available online. It is acknowledged that, without close collarboration between the two teams, DeepH-hybrid won't be available.
- **深度学习与第一性原理计算 (Deep learning and first-principles calculations)**: A Chinese Review on DeepH. [The published version](https://wuli.iphy.ac.cn/en/article/doi/10.7693/wl20240702?viewType=HTML) is available online.

Apart from the dedicated Reviews listed above, we briefly explian why we regard DeepH as an import development in deep-learning DFT. In parallel with many deep-learning methods that focus on modeling potential energy surfaces, DeepH targets the **electronic Hamiltonian**, the core quantity for DFT electronic structures. From the Hamiltonians predicted by deep learning, a wide range of mean-field-level electronic properties can be derived. Moreover, Hamiltonians naturally contain rich information, aligning well with the data-hungry nature of deep-learning models. Consequently, DeepH can be viewed as a deep-learning counterpart to empirical tight-binding models, yet retaining first-principles accuracy.

It is important to emphasize that, despite the dedicated efforts in preparing the interface and tutorials, the package remains at preliminary stage in terms of functionality. We warmly welcome discussions, feedback, and ideas regarding its development and improvement.


## Structure of the tutorial

The rest part of the tutorials are arranged as follows:

- `1.Theoretical_backgrounds.md` includes a brief technical guidance for understanding the theoretical backgrounds.
- `2.Installation.md` provides a hand-on guide for installing DeepH-pack and related pre-/post-processing tools (many of which are integrated in DeepH-dock).
- `3.Interface.md` provides a hand-on guide for generating DeepH-formatted Hamiltonian and structural files for subsequent training.
- `4.Training.md` illustrates how to perform DeepH-pack training.
- `5.Inference.md` presents an example for DeepH inference.
- `6.UMM_odyssey` demonstrates leveraging pre-trained Universal Materials Models.
