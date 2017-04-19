import React, {Component} from "react";
import ol from "openlayers";
//This component use http://openlayers.org/ api under BSD 2-clause license
class Getlocation extends Component {
    constructor(props) {
        super(props);
		this.state = {
            height: parseInt(this.props.height) || 200,
            width: parseInt(this.props.width) || 200,
            view: null,
            id: this.props.id || "thousandaymaplocation",
            zoom: parseInt(this.props.zoom) || 15,
            max: parseInt(this.props.maxZoom) || 15,
            set: parseInt(this.props.setZoom) || 15,
            center: this.props.center || [-147, -31],
            displayMode: this.props.display || "false",
            fontFamily: this.props.fontFamily || "Times New Roman",
            indicate: this.props.indicate || "Save"
		};
	}
    componentDidMount() {
        let layer = new ol.layer.Tile({
            source: new ol.source.OSM()
        });
        let center = ol.proj.transform(this.state.center, "EPSG:4326", "EPSG:3857");
        let view = new ol.View({
            center: center,
            zoom: this.state.zoom
        });
        let map;
        if (this.state.displayMode == "true") {
            map = new ol.Map({
                target: this.state.id,
                interactions: ol.interaction.defaults().extend([
                    new ol.interaction.DragRotateAndZoom()
                ]),
                layers: [layer],
                view: view
            });
        } else {
            map = new ol.Map({
                target: this.state.id,
                interactions: ol.interaction.defaults({
                    shiftDragZoom: false
                }).extend([new ol.interaction.DragRotateAndZoom()]),
                layers: [layer],
                view: view
            });
        }
        this.setState({view: view});
	}
    clickGeo() {
        let geolocation = new ol.Geolocation({tracking: true});
        let self = this;
        geolocation.on("change:position", function() {
            let p = geolocation.getPosition();
            let newCenter = ol.proj.transform([parseFloat(p[0]), parseFloat(p[1])], "EPSG:4326", "EPSG:3857");
            self.state.view.setCenter(newCenter);
            self.state.view.setZoom(15);
        });
    }
    clickIn() {
        let currentZoom = this.state.view.getZoom();
        if (currentZoom <= (this.state.max - 1)) {
            this.state.view.setZoom(currentZoom + 1);
        }
    }
    clickOut() {
        let currentZoom = this.state.view.getZoom();
        if (currentZoom >= 2) {
            this.state.view.setZoom(currentZoom - 1);
        }
    }
    clickSave() {
        this.state.view.setZoom(this.state.set);
        let coor = ol.proj.transform(this.state.view.getCenter(), "EPSG:3857", "EPSG:4326");
        this.props.saveLocation(coor);
    }
    render() {
        let containerStyle = {
			display: "inline-block",
            varticalAlign: "top",
			width: this.state.width + "px",
            height: this.state.height + "px"
		};
        let containerMapStyle = {
            display: "block",
			width: this.state.width + "px",
            height: this.state.height + "px",
            zIndex: "3",
            backgroundColor: "#dbdbdb"
        };
        let containerGroupStyle = {
            position: "relative",
            top: "-" + this.state.height + "px",
            height: "0"
        };
        let groupGeoStyle = {
            position: "absolute",
            top: (this.state.height - 35) + "px",
            left: (this.state.width - 35) + "px",
            width: "25px",
            height: "25px",
            borderRadius: "4px",
            border: "0",
            color: "white",
            backgroundColor: "rgba(0,60,136,.7)",
            fontFamily: "Times New Roman",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer"
        };
        let groupInStyle = {
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "25px",
            height: "25px",
            borderRadius: "4px",
            border: "0",
            color: "white",
            backgroundColor: "rgba(0,60,136,.7)",
            fontFamily: "Times New Roman",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer"
        };
        let groupOutStyle = {
            position: "absolute",
            top: "37px",
            left: "10px",
            width: "25px",
            height: "25px",
            borderRadius: "4px",
            border: "0",
            color: "white",
            backgroundColor: "rgba(0,60,136,.7)",
            fontFamily: "Times New Roman",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer"
        };
        let containerSaveStyle = {
            position: "block",
            marginTop: "10px",
            marginLeft: "1%",
            border: "1px solid #052456",
            color: "black",
            width: "98%",
            backgroundColor: "white",
            borderRadius: "3px",
            outline: "none",
            fontFamily: this.state.fontFamily,
            cursor: "pointer"
        };
        let groupLoveStyle = {
            position: "absolute",
            width: "44px",
            height: "18px",
            lineHeight: "18px",
            left: (this.state.width / 2 - 22) + "px",
            top: (this.state.height /2 - 9) + "px",
            fontFamily: "Times New Roman",
            fontSize: "14px",
            textAlign: "center",
            backgroundColor: "#ef8513",
            color: "white",
            borderRadius: "5px",
            verticalAlign: "middle"
        };
        let groupYouStyle = {
            position: "absolute",
            width: "22px",
            height: "26px",
            left: (this.state.width / 2 - 11) + "px",
            top: (this.state.height /2 - 13) + "px",
            fontFamily: "Times New Roman",
            fontSize: "24px",
            textAlign: "center",
            backgroundColor: "#ef8513",
            color: "white",
            borderRadius: "5px"
        };
        let mode, save;
        if (this.state.displayMode == "true") {
            mode = (
                <div style={containerGroupStyle}>
                    <input type="button" value="+" style={groupInStyle} onClick={this.clickIn.bind(this)} />
                    <input type="button" value="-" style={groupOutStyle} onClick={this.clickOut.bind(this)} />
                    <span style={groupYouStyle}>♥</span>
                </div>
            )
        } else {
            mode = (
                <div style={containerGroupStyle}>
                    <input type="button" value="+" style={groupInStyle} onClick={this.clickIn.bind(this)} />
                    <input type="button" value="-" style={groupOutStyle} onClick={this.clickOut.bind(this)} />
                    <input type="button" value="Θ" style={groupGeoStyle} onClick={this.clickGeo.bind(this)} />
                    <span style={groupLoveStyle}>Y ♥ U</span>
                </div>
            );
            save = <input type="button" style={containerSaveStyle} value={this.state.indicate} onClick={this.clickSave.bind(this)} />;
        }
		return (
            <div style={containerStyle}>
                <div id={this.state.id} style={containerMapStyle}></div>
                {mode}
                {save}
			</div>
		);
	}
}
export default Getlocation;