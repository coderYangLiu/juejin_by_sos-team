import React from 'react';
import styles from './index.module.less'

interface Props {
    slogan?: string;
}

let getTimeState = () => {
    // 获取当前时间小时
    let hours = new Date().getHours();
    // 设置默认文字
    let text = ``;
    // 判断当前时间段
    if (hours >= 0 && hours <= 10) {
        text = `早上好`;
    } else if (hours > 10 && hours <= 14) {
        text = `中午好`;
    } else if (hours > 14 && hours <= 18) {
        text = `下午好`;
    } else if (hours > 18 && hours <= 24) {
        text = `晚上好`;
    }
    return text;
};

const Register: React.FC<Props> = (props) => {
    const {slogan} = props;
    return (
        <div className={styles.myCard}>
            <div>
                <div className={styles.left}>
                    <span>{getTimeState()}</span>
                    <div>{slogan??"点亮在社区的每一天"}</div>
                </div>
                <button className={styles.right}>
                    <span>去签到</span>
                </button>
            </div>
        </div>
    );
};
export default Register;