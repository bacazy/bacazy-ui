import { observable, computed, action, toJS } from "mobx";
import R2 from './R2';

export class MapData {
    @observable
    markers=[
        {
			"label": "华为",
			"lng": 113.9135,
			"lat": 22.8975
		},
		{
			"label": "豪顺",
			"lng": 113.8178,
			"lat": 22.9184
        },
        ...R2.map(e => {
            return {
                label: `R2-${e.label}`,
                ...this.toLoc(e.location)
            }
        })
    ];

    toLoc(location){
        let loc = location.split(',');
        return {
            lng: loc[0],
            lat: loc[1]
        }
    }

    @observable
    center={lng: 113.88, lat: 22.9};

    @observable
    zoom = 15;

    @observable
    subways=[]

    @observable
    currentSubwayIndex = 0;

    @computed
    get currentSubway(){
        return this.subways[this.currentSubwayIndex];
    }

    @action
    addMarker(marker){
        this.markers.push(marker)
    }

    @action
    addNodeToCurrentSubway (name, lng, lat){
        this.currentSubway.path.push({
            name: name,
            lat: lat,
            lng: lng
        })
    }

    @action
    addNewLine(line){
        this.subways.push({
            ...line,

        })
    }

    @computed
    get options () {
        return {}
    }

    @action
    onSubwayVisibleChange(index, checked){
        this.subways[index].visible = checked;
    }

    @action
    addSubway({name, color}){
        this.subways.push(
            {
                strokeColor: color,
                name: name,
                path: [],
                visible: true
            }
        );

        this.currentSubwayIndex++;
    }

    @action
    updateCenter(center){
        this.center = center;
    }

    @action
    updateZoom(zoom){
        this.zoom = zoom;
    }

    @action
    save(){
        localStorage.setItem('DG_MAP_DATA', JSON.stringify(this.mapData));
    }

    @action
    load(){
        let data = JSON.parse(localStorage.getItem('DG_MAP_DATA'));
        if(data.markers){
            this.markers = data.markers;
        }
        if(data.subways){
            this.subways = data.subways;
        }
        this.currentSubwayIndex = data.currentSubwayIndex;
    }

    @action
    clear(){
        localStorage.setItem('DG_MAP_DATA', JSON.stringify({}));
        this.markers = [];
        this.subways = [];
        this.currentSubwayIndex = -1;
    }

    @computed
    get mapData(){
        return {
            markers: toJS(this.markers),
            subways: toJS(this.subways),
            currentSubwayIndex: toJS(this.currentSubwayIndex)
        }
    }
}