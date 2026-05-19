# 示例：数学与流程图

## 1. 行内与块级数学

- `$...$`：$\nabla\cdot\vec{E}=\frac{\rho}{\varepsilon_0}$
- `\(...\)`：\(\sum_{k=1}^{n}k=\frac{n(n+1)}{2}\)

$$
\left\{
\begin{aligned}
2x+y &= 1\\
x-y &= 3
\end{aligned}
\right.
$$

## 2. Mermaid 流程图

```mermaid
graph TD
  A[开始] --> B{是否有公式?}
  B -->|有| C[渲染 MathJax]
  B -->|有流程图| D[渲染 Mermaid]
  C --> E[输出页面]
  D --> E
```

## 3. 时序图

```mermaid
sequenceDiagram
  participant U as User
  participant M as mdBook
  participant J as MathJax
  U->>M: 打开页面
  M->>J: 处理数学公式
  J-->>U: 显示公式
```
