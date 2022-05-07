import classNames from 'classnames';
import React from 'react';
import styles from './index.less'

export default ({ title, style, className }: { title: string, style: Object, className: string }) => {
  console.log(className);

  return <button className={classNames(styles[className])} style={style}>{title}</button>;
}

