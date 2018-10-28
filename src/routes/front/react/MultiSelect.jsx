import React from 'react';
import { Tag } from 'antd';
import styles from './MultiSelect.less';
import { Icon } from 'antd';

class SelectedTag extends React.PureComponent {
    render () {
        return (
            <div>
            </div>
        )
    }
}

class Option extends React.PureComponent {
    onClick = (e) => {
        if (this.props.onClick && typeof this.props.onClick === 'function') {
            this.props.onClick(e);
        }
    }

    render() {
        return (
            <div className={styles.MultiSelectOption} onClick={e => this.onClick}>
                <div className={styles.MultiSelectOptionLabel}>
                    {this.props.children}
                </div>
                {
                    this.props.selected ?
                        (
                            <div className={styles.MultiSelectOptionFlag}>
                                <Icon type="check" theme="outlined" />
                            </div>
                        ) : null
                }

            </div>
        )
    }
}

class MultiSelect extends React.Component {
    state = {
        selected: [],
        options: []
    }

    shouldComponentUpdate(nextProps) {

    }

    onOptionClick = (value) => {
        let selected = this.state.selected;
        let index = selected.indexOf(value);
        if(index < 0) {
            selected.push()
        }else {

        }

        this.setState({selected: selected})
    }

    render() {
        let options = [
            {
                key: 'a',
                value: 'a',
                label: 'a'
            },
            {
                key: 'b',
                value: 'b',
                label: 'b'
            }
        ]


        return (
            <div className="full-width dropdown" style={{ width: "300px" }}>
                <div className={"full-width " + styles.MultiSelectTags}>
                    {
                        this.state.selected.map(e => {
                            return <Tag>{e.label}</Tag>
                        })
                    }
                </div>
                <div className="multiselect-options full-width dropdown-content">
                    {
                        options.map(option => {
                            return <Option onClick={(e) => this.onOptionClick(option.value)} value={option.value} key={option.key} selected={true}>{option.label}</Option>;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default MultiSelect;