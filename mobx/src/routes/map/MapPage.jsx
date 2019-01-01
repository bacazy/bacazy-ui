
import React from 'react';
import { Form, Input, Slider, Switch, Modal, Button, InputNumber } from 'antd';
import { observer } from 'mobx-react';
import { inject } from '../../components/utils/inject';
import { MapData } from './Map';
import styles from './Map.less';
import { Map, NavigationControl, Polyline, Marker, InfoWindow, MarkerList, ScaleControl } from 'react-bmap';

const FormItem = Form.Item;

@inject({map: new MapData()})
@observer
class MapPage extends React.Component {
    state = {
        modalVisible: false,
        line: {
            name: '',
            color: ''
        },
        position: {
            label: '',
            lng: 113.88, 
            lat: 22.9
        }
    }

    onAddMarker = () =>{
        this.props.map.addMarker(this.state.position);
    }

    onSaveData = () =>{
        this.props.map.save();
    }

    componentDidMount(){
        this.props.map.load();
    }

    componentWillUnmount(){
        this.props.map.save();
    }

    onPreviewData = ()=>{
        Modal.info({
            title: "Preview",
            content: <pre>{JSON.stringify(this.props.map.mapData, null, "\t")}</pre>
        })
    }

    render(){
        const {map} = this.props;
        const {position} = this.state;
        return (
            <div className={styles.Container} style={{width: '100%', height: '100%'}} >
                <div className={styles.ParamsPanel}>
                    <div className={styles.GroupTitile}>
                        当前点
                    </div>
                    <FormItem label={"名称"} labelCol={{span:8}} wrapperCol={{span: 16}}>
                        <Input value={position.label} onChange={e => this.setState({position: {...position, label: e.target.value}})}/>
                    </FormItem>

                    <FormItem label={"经度"} labelCol={{span:8}} wrapperCol={{span: 16}}>
                        <InputNumber step={0.001} value={position.lng} onChange={e => this.setState({position: {...position, lng: e}})}/>
                    </FormItem>

                    <FormItem label={"纬度"} labelCol={{span:8}} wrapperCol={{span: 16}}>
                        <InputNumber step={0.001} value={position.lat} onChange={e => this.setState({position: {...position, lat: e}})}/>
                    </FormItem>

                    <Button onClick={this.onAddMarker}>添加至标记点</Button>
                    <Button>添加至当前线路</Button>
                    <div>
                    <div className={styles.GroupTitile}>
                        当前点
                    </div>
                        {
                            map.subways.map((subway, index) => {
                                return (
                                    <FormItem key={subway.name} label={subway.name} labelCol={{span:8}} wrapperCol={{span: 16}}>
                                        <Switch checked={subway.visible} onChange={checked => map.onSubwayVisibleChange(index,checked)}/>
                                    </FormItem>
                                )
                            })
                        }
                        
                    </div>

                    <Button type="primary" onClick={e => this.setState({modalVisible: true})}>
                        添加线路
                    </Button>

                    <div className={styles.GroupTitile}>
                        设置
                    </div>
                    
                    <Button onClick={this.onPreviewData}>预览</Button>
                    <Button onClick={this.onSaveData}>保存</Button>
                    <Button onClick={() => map.clear()}>清空</Button>
                </div>
                <div className={styles.MapContainer}>
                    <Map center={map.center} zoom={map.zoom} style={{height: "100%"}}>
                        <NavigationControl/>
                        <ScaleControl/>
                        {
                            map.subways.filter(e => e.visible).map((subway, index) => {
                                return (
                                    <Polyline strokeColor={subway.color} path={subway.path} key={subway.name} />
                                )
                            })
                        }
                        <MarkerList 
                            data={map.markers.map(e => {return {text: e.label, location: `${e.lng},${e.lat}`}})}
                            fillStyle="#ff3333" 
                            animation={true} 
                            isShowShadow={false} 
                            multiple={true} 
                            autoViewport={true}
                        />
                        <Marker position={position} text={position.label} title={position.label} icon="loc_red"/>
                        
                    </Map>
                </div>
                <div>
                    <Modal title="添加线路" 
                        width={700}
                        visible={this.state.modalVisible}
                        onCancel={e=>this.setState({modalVisible: false})}
                        onOk={e => {map.addSubway(this.state.line), this.setState({modalVisible: false})}}>
                        <FormItem label="名称">
                            <Input value={this.state.line.name} onChange={e => this.setState({line: {...this.state.line, name: e.target.value}})}/>
                        </FormItem>
                        <FormItem label="颜色">
                            <Input value={this.state.line.color} onChange={e => this.setState({line: {...this.state.line, color: e.target.value}})}/>
                        </FormItem>
                    </Modal>
                </div>
            </div>
        )
    }
}


export default MapPage;