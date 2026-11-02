# 2026年DeepH研讨会

2026 版教程正在编写中，即将公布，敬请期待。

新版与 2025 版相比会有较大调整，发布后这里会给出一套完整的安装、数据接口、训练与推理流程，
中文版同步更新。

2025 版教程仍然可以访问：[workshop.deeph-pack.com/zh-cn/2025/](https://workshop.deeph-pack.com/zh-cn/2025/)。

## 关于 DeepH

DeepH（Deep-learning electronic Hamiltonian methods）是清华大学物理系徐勇教授与段文晖教授
课题组发展的深度学习框架，用于对 DFT 电子哈密顿量做神经网络建模。与拟合势能面的方法不同，
它学习的是电子哈密顿量本身——由哈密顿量可以直接得到能带、态密度等一系列平均场层面的电子性质，
因此可以看作是具有第一性原理精度的经验紧束缚模型的深度学习对应物。

## 引用方式

如果本教程对你的工作有帮助，请引用 DeepH-pack 的论文：

- Yang Li, Yanzhen Wang, Boheng Zhao, *et al.* **DeepH-pack: a general-purpose neural
  network package for deep-learning electronic structure calculations.**
  *npj Comput. Mater.* **12**, 361 (2026).
  [doi:10.1038/s41524-026-02219-2](https://doi.org/10.1038/s41524-026-02219-2)
- 原始框架：He Li, Zun Wang, Nianlong Zou, *et al.* **Deep-learning density functional
  theory Hamiltonian for efficient ab initio electronic-structure calculation.**
  Nat. Comput. Sci. 2, 367 (2022).

BibTeX 条目与引用规范见 DeepH-pack 文档的
[引用与社区页](https://docs.deeph-pack.com/deeph-pack/en/latest/citation_and_community.html)。

```{toctree}
:maxdepth: 2
:caption: 教程结构

1.Theoretical_backgrounds
2.Installation
3.Interface
4.Training
5.Inference
6.UMM_odyssey
```
