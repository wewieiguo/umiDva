import React from 'react';
import styles from './index.less';
export default function BorderContent() {
  console.log('boder');
  return (
    <div className={styles['border-container']}>
      <div className={styles['border-define-container']}>
        {/* border-img的属性 */}
        <h1> border-img的属性：</h1>
        <ul>
          <li>语法：border-image: source slice width outset repeat|initial|inherit;</li>
          <li>border-image-source :用于指定要用于绘制边框的图像的位置</li>
          <li>border-image-slice :图像边界向内偏移</li>
          <li>border-image-width :图像边界的宽度</li>
          <li>border-image-outset :用于指定在边框外部绘制 border-image-area 的量</li>
          <li>
            border-image-repeat
            :用于设置图像边界是否应重复（repeat）、拉伸（stretch）或铺满（round）。
          </li>
        </ul>
        {/* border-radiu的属性 */}
        <h1>border-radiu的属性：</h1>
        <ul>
          <li>border-radius: 1-4 length|% / 1-4 length|%;</li>
          <li>
            注意:
            每个半径的四个值的顺序是：左上角，右上角，右下角，左下角。如果省略左下角，右上角是相同的。如果省略右下角，左上角是相同的。如果省略右上角，左上角是相同的。
          </li>
        </ul>
        {/* border-shadow属性 */}
        <h1>border-shadow属性</h1>
        <ul>
          <li>语法: box-shadow: h-shadow v-shadow blur spread color inset;</li>
          <li>
            注意：boxShadow
            属性把一个或多个下拉阴影添加到框上。该属性是一个用逗号分隔阴影的列表，每个阴影由 2-4
            个长度值、一个可选的颜色值和一个可选的 inset 关键字来规定。省略长度的值是 0。
          </li>
          <li>h-shadow :必需的。水平阴影的位置。允许负值</li>
          <li>v-shadow :必需的。垂直阴影的位置。允许负值</li>
          <li>blur :可选。模糊距离</li>
          <li>spread :可选。阴影的大小</li>
          <li>color :可选。阴影的颜色</li>
          <li>inset :可选。从外层的阴影（开始时）改变阴影内侧阴影</li>
        </ul>
      </div>
      <div className={styles['border-example-container']}>
        <h3>border-img实例</h3>
        <div className={styles['border-img-round-content']}>round(铺满)</div>
        <div className={styles['border-img-stretch-content']}>stretch（拉伸）</div>
        <div className={styles['border-img-repeat-content']}>repeat(重复)</div>
        <h3>border-radius实例</h3>
        <div className={styles['border-demo']}>使用px</div>
        <div className={styles['border-demo2']}>使用百分比</div>
        <div className={styles['border-demo3']}>定义四个角的radius</div>
      </div>
    </div>
  );
}
