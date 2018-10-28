import React from 'react';
import styles from './HeaderView.less';
import { Row, Col } from 'antd';
import { Link } from 'dva/router';


class HeaderView extends React.Component {

    render() {
        return (
            <Row>
                <Col md={12}>
                    <div className={styles.Brand}>
                        <Link to="/">
                            Bacazy
                        </Link>
                    </div>
                </Col>
                <Col md={12}>

                </Col>
            </Row>
        )
    }
}

export default HeaderView;