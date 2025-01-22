(function(){
    var script = {
 "start": "this.playAudioList([this.audio_CDBC8786_EBE1_45F2_41EC_305DA7EA62BD]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_F92B7131_EEFA_04F4_41ED_95D3D11B0B52], 'cardboardAvailable'); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_F0ED9970_E793_6149_41E6_D857883AD46E_playlist,this.ThumbnailList_FFB0FAC9_E7EE_B32B_41D7_14040F3028C3_playlist,this.ThumbnailList_AC6E3E45_E86E_9318_41DF_9F94DB64D8CB_playlist,this.ThumbnailList_8828A8A0_E8FA_9F18_419A_B969AA37C137_playlist,this.ThumbnailList_B50C9E5D_A0AB_CFD4_41DC_5943614E759B_playlist,this.ThumbnailList_B5327F52_A0AB_4D2D_41D7_51D5F5899E68_playlist,this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.mainPlayList]); this.playList_374C06E9_38EC_23E3_41C6_946AF54BD547.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_F92B1131_EEFA_04F4_41D9_8C823316B131",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
  "this.TabPanel_F162D482_E795_67C9_41CD_0538B3377AD5",
  "this.MapViewer",
  "this.Container_CC60BB02_EF1A_0494_41E0_79D7A9D35E57",
  "this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
  "this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
  "this.Container_2792A64E_17CC_071D_41B0_BEA23997C067",
  "this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
  "this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_FA149FCC_EBA1_C575_41EC_FFC8BA936036.ogg",
  "class": "AudioResource"
 },
 "id": "audio_FA149FCC_EBA1_C575_41EC_FFC8BA936036",
 "data": {
  "label": "junior high"
 },
 "class": "MediaAudio"
},
{
 "initialPosition": {
  "yaw": -4.63,
  "class": "PanoramaCameraPosition",
  "pitch": -44.6
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -108.45,
  "class": "PanoramaCameraPosition",
  "pitch": -11.63
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -31.22,
  "class": "PanoramaCameraPosition",
  "pitch": -6.96
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_camera",
 "class": "PanoramaCamera"
},
{
 "id": "effect_21F98D73_30ED_45DC_41BC_8F41D4553FD3",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 129.99,
  "class": "PanoramaCameraPosition",
  "pitch": -9.95
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C8A95B32_E825_B178_41D5_56799875B2B3_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "be 3f2",
 "hfovMin": "135%",
 "id": "panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F351ECC6_E7E6_9719_41EA_2D38DF30785F",
  "this.panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F1361002_E7FA_8F19_41B6_A21F5639310F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sj od1",
 "hfovMin": "135%",
 "id": "panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F2604B10_E32A_B0EB_41E9_655DC0319B09",
  "this.overlay_F2B5DF55_E32B_8F15_41EA_CA823B2D1CB3",
  "this.overlay_F22B65EC_E32D_933B_41E6_CDC16EA90789",
  "this.overlay_F3C84C29_E32E_913A_41E4_CC4B1CA87A71",
  "this.overlay_ED84434C_E370_C6EA_41E5_9689EDD8C108",
  "this.overlay_ED84BCFC_E370_43A9_41E2_BF37AC35D1F1",
  "this.panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BASIC ED 2ND FLOOR",
 "hfovMin": "135%",
 "id": "panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F7C02E18_E7EB_7328_41E9_E93884DCD8A7",
  "this.overlay_F6DAA94D_E7EB_9128_41B2_D9B169C47A6B",
  "this.overlay_F5E73E2D_E7E5_736B_41EA_07FE80FBE5AC",
  "this.overlay_F48FC60E_E7E5_9326_41DB_C4CDBD71440C",
  "this.overlay_F482361F_E7FB_7327_41EA_F6910BF46715",
  "this.overlay_F4388694_E7FB_7338_41CD_FFE10E88FAF8",
  "this.panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F791628E_E7EE_9328_41EB_988EBF482C48"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F1361002_E7FA_8F19_41B6_A21F5639310F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BASIC ED 3RD FLOOR",
 "hfovMin": "135%",
 "id": "panorama_F1361002_E7FA_8F19_41B6_A21F5639310F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F3D37A38_E7E6_9368_419F_B1C18C52B083",
  "this.overlay_F28B7EE7_E7E7_9318_41E6_637D1173F9D3",
  "this.overlay_F3B9F2C9_E7E5_932B_41C1_448A221491F7",
  "this.overlay_F308DC21_E7EA_971B_41A2_566383552898",
  "this.panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "jh 2f3",
 "hfovMin": "135%",
 "id": "panorama_C82D4E91_E825_9338_41D4_80F12504B135",
 "class": "Panorama",
 "overlays": [
  "this.overlay_C9E9B725_E82A_911B_41DC_B5843D61532D",
  "this.panorama_C82D4E91_E825_9338_41D4_80F12504B135_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8A95B32_E825_B178_41D5_56799875B2B3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 179,
  "class": "PanoramaCameraPosition",
  "pitch": 4.52
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -178.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0.97
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sh 2f2",
 "hfovMin": "135%",
 "id": "panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BD4A0689_E8EB_B32B_41EA_04270ECBA07C",
  "this.panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A77061C0_E81E_B119_41E9_2BC2300729D6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sh 1f5R",
 "hfovMin": "135%",
 "id": "panorama_D57417BF_E81B_9167_41EC_746462EACC45",
 "class": "Panorama",
 "overlays": [
  "this.overlay_A27C30B8_E82A_8F68_41EB_48CD97210251",
  "this.panorama_D57417BF_E81B_9167_41EC_746462EACC45_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_t.jpg",
 "hfovMax": 130
},
{
 "id": "effect_2945A0BD_30F7_DB47_41BC_CCE46AF5B1FE",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -49.28,
  "class": "PanoramaCameraPosition",
  "pitch": -10.02
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D577A608_E81B_B329_41E8_6E556B806394_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 2.4,
  "class": "PanoramaCameraPosition",
  "pitch": 7.77
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_E4C689F0_EBA3_4D2E_41C5_F77B87666876.ogg",
  "class": "AudioResource"
 },
 "id": "audio_E4C689F0_EBA3_4D2E_41C5_F77B87666876",
 "data": {
  "label": "history"
 },
 "class": "MediaAudio"
},
{
 "id": "effect_2945D0C7_30F7_DCC3_41A4_F84A34AB3630",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -95,
  "class": "PanoramaCameraPosition",
  "pitch": -9.05
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D57417BF_E81B_9167_41EC_746462EACC45_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "AERIAL FRONT",
 "hfovMin": "135%",
 "id": "panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F3C5B465_E2F8_4C07_41E8_D9FCCAF3F991",
  "this.overlay_F4EC95BA_E2E8_CC0D_41E8_E04E56B0F502",
  "this.overlay_F49D0307_E328_C403_41D2_F766A3909F34",
  "this.overlay_F5EFB71B_E318_4C03_41E2_6CD37116B805",
  "this.overlay_F4F28C20_E328_FC3D_417C_527577A3C590",
  "this.overlay_FE811B19_E328_C40F_41D8_CF52259A6CCD",
  "this.overlay_FC60614D_E329_C407_41E1_81A90E062876",
  "this.overlay_FDA9B94B_E329_C403_41E3_BDFF535E4741",
  "this.overlay_FF67EC78_E477_C828_41E1_239DBCF6D96C",
  "this.overlay_FF5C4B99_E47D_48EB_41E1_A95B178BD287",
  "this.overlay_E7557FB1_E994_903B_41E5_52713A0CFEAA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_F642562A_EBA1_4732_41BA_FF8C465AAD8E"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration",
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_F92B7131_EEFA_04F4_41ED_95D3D11B0B52",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_FABCAB97_EBA0_CD12_41E0_461E791C59B6.ogg",
  "class": "AudioResource"
 },
 "id": "audio_FABCAB97_EBA0_CD12_41E0_461E791C59B6",
 "data": {
  "label": "cafeteria"
 },
 "class": "MediaAudio"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "jh 3f2",
 "hfovMin": "135%",
 "id": "panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CF51A9F1_E81F_B0FB_41D2_373FFE10AC1A",
  "this.panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C541BE94_E81A_F339_41DA_C3229365F03C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sh 1f7R",
 "hfovMin": "135%",
 "id": "panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_A57CEEED_E82A_90EB_41EB_C5CB57763889",
  "this.panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -179.56,
  "class": "PanoramaCameraPosition",
  "pitch": -7.48
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A5999678_E81E_93E9_41E5_6F99159B9343_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -4.97,
  "class": "PanoramaCameraPosition",
  "pitch": -10.99
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -140.29,
  "class": "PanoramaCameraPosition",
  "pitch": -14.63
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -113.53,
  "class": "PanoramaCameraPosition",
  "pitch": -6.53
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -169.84,
  "class": "PanoramaCameraPosition",
  "pitch": -17.19
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 3.31,
  "class": "PanoramaCameraPosition",
  "pitch": -6.87
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sj od7",
 "hfovMin": "135%",
 "id": "panorama_E46E0E13_E92E_512B_41E7_808D1FF14891",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FA093707_E93A_7F2B_41E0_7552B7269F94",
  "this.overlay_FAB0736A_E93A_37E5_41C5_BE33D28E97B1",
  "this.overlay_FDF9F01B_E93E_D15B_41D1_BBABD4ADF8A9",
  "this.overlay_FDE54E94_E93E_312E_41D6_A6177E3C021D",
  "this.overlay_FE261DA0_E92A_D365_41E1_50F50260F4BE",
  "this.overlay_FE5BF8BB_E92E_515B_41E6_2ECB9F59A8E6",
  "this.overlay_F3200A96_E95A_512D_41D7_E027AE227F1F",
  "this.overlay_F05EFB2C_E95A_777D_41E2_E2AB506FF944",
  "this.panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F692A634_E81E_9379_41D7_20B83BFD553D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -89.04,
  "class": "PanoramaCameraPosition",
  "pitch": -9.61
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84",
   "end": "this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false, -1, this.effect_C654A10F_EF2A_04AC_41D5_81142A336D3F, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true)",
   "camera": "this.panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false); this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true, -1, this.effect_C653610F_EF2A_04AC_41DA_F19C9FC0D833, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB",
   "end": "this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false, -1, this.effect_21F98D73_30ED_45DC_41BC_8F41D4553FD3, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true)",
   "camera": "this.panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2); this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false); this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true, -1, this.effect_21F9BD73_30ED_45DC_41B3_0DF608BF5DD5, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B",
   "end": "this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false, -1, this.effect_21F67D74_30ED_45C4_41BB_4A1798500616, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true)",
   "camera": "this.panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 3); this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false); this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true, -1, this.effect_21F99D74_30ED_45C4_41B9_F8AA023E3378, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807",
   "camera": "this.panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721",
   "end": "this.setComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, false, -1, this.effect_2945A0BD_30F7_DB47_41BC_CCE46AF5B1FE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, true)",
   "camera": "this.panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 4, 5); this.keepComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, false); this.setComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, true, -1, this.effect_2945B0BD_30F7_DB47_41C0_9852F833F17A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB",
   "camera": "this.panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A",
   "end": "this.setComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, false, -1, this.effect_2A75FC80_30F5_4B3C_41C0_F62F3F85C778, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, true)",
   "camera": "this.panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 6, 7); this.keepComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, false); this.setComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, true, -1, this.effect_2A75CC7F_30F5_4BC4_419B_E538E4CF410C, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C",
   "camera": "this.panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184",
   "camera": "this.panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371",
   "camera": "this.panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33",
   "camera": "this.panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B",
   "camera": "this.panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807",
   "camera": "this.panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81",
   "camera": "this.panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35",
   "camera": "this.panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53",
   "camera": "this.panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D",
   "camera": "this.panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8",
   "end": "this.setComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, false, -1, this.effect_2945C0C8_30F7_DCCD_4195_9D64D10B4F38, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, true)",
   "camera": "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 17, 18); this.keepComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, false); this.setComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, true, -1, this.effect_2945D0C7_30F7_DCC3_41A4_F84A34AB3630, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8",
   "camera": "this.panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F106089E_E795_6FF9_41D7_99293685C20F",
   "camera": "this.panorama_F106089E_E795_6FF9_41D7_99293685C20F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598",
   "camera": "this.panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9",
   "camera": "this.panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F791628E_E7EE_9328_41EB_988EBF482C48",
   "camera": "this.panorama_F791628E_E7EE_9328_41EB_988EBF482C48_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F1361002_E7FA_8F19_41B6_A21F5639310F",
   "camera": "this.panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4",
   "camera": "this.panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739",
   "camera": "this.panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F692A634_E81E_9379_41D7_20B83BFD553D",
   "end": "this.setComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, false, -1, this.effect_2945E0CF_30F7_DCC3_41A4_060602DAC600, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, true)",
   "camera": "this.panorama_F692A634_E81E_9379_41D7_20B83BFD553D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 26, 27); this.keepComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, false); this.setComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, true, -1, this.effect_2945F0CF_30F7_DCC3_415C_D07BAB4556B4, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C8A95B32_E825_B178_41D5_56799875B2B3",
   "camera": "this.panorama_C8A95B32_E825_B178_41D5_56799875B2B3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C85BA560_E825_9119_41E4_1E69324259B3",
   "camera": "this.panorama_C85BA560_E825_9119_41E4_1E69324259B3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C82D4E91_E825_9338_41D4_80F12504B135",
   "camera": "this.panorama_C82D4E91_E825_9338_41D4_80F12504B135_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C541BE94_E81A_F339_41DA_C3229365F03C",
   "camera": "this.panorama_C541BE94_E81A_F339_41DA_C3229365F03C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5",
   "camera": "this.panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6",
   "camera": "this.panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6DAEC85_E86F_9718_41D9_94E028D33568",
   "camera": "this.panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C64F66C0_E86F_7318_41E5_65547DB5D144",
   "camera": "this.panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3",
   "camera": "this.panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96",
   "end": "this.setComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, false, -1, this.effect_294500D7_30F7_DCC3_4181_048D77176BBE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, true)",
   "camera": "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 36, 37); this.keepComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, false); this.setComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, true, -1, this.effect_294510D6_30F7_DCC5_41A1_A09DFD895A63, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA",
   "camera": "this.panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D577A608_E81B_B329_41E8_6E556B806394",
   "camera": "this.panorama_D577A608_E81B_B329_41E8_6E556B806394_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11",
   "camera": "this.panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D57417BF_E81B_9167_41EC_746462EACC45",
   "camera": "this.panorama_D57417BF_E81B_9167_41EC_746462EACC45_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5",
   "camera": "this.panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E",
   "camera": "this.panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A77061C0_E81E_B119_41E9_2BC2300729D6",
   "camera": "this.panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E",
   "camera": "this.panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A5999678_E81E_93E9_41E5_6F99159B9343",
   "camera": "this.panorama_A5999678_E81E_93E9_41E5_6F99159B9343_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72",
   "camera": "this.panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB",
   "end": "this.setComponentVisibility(this.HTMLText_E5C2B7BC_F10B_8A1C_41D0_02810B92D5A4, false, -1, this.effect_E48C9795_F108_8AEC_41E4_7CDDB6F08C9F, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E5C2B7BC_F10B_8A1C_41D0_02810B92D5A4, true)",
   "camera": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 47, 48); this.keepComponentVisibility(this.HTMLText_E5C2B7BC_F10B_8A1C_41D0_02810B92D5A4, false); this.setComponentVisibility(this.HTMLText_E5C2B7BC_F10B_8A1C_41D0_02810B92D5A4, true, -1, this.effect_E48C8795_F108_8AEC_41B0_386A6987464B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130",
   "camera": "this.panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241",
   "end": "this.setComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, false, -1, this.effect_C9DB9B6F_EF2E_3B6C_419E_8FAECA5774BC, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, true)",
   "camera": "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 49, 50); this.keepComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, false); this.setComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, true, -1, this.effect_C9DB4B6F_EF2E_3B6C_41DE_1D364528B779, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07",
   "camera": "this.panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A",
   "camera": "this.panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E46E0E13_E92E_512B_41E7_808D1FF14891",
   "camera": "this.panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4",
   "end": "this.setComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, false, -1, this.effect_EC7C7454_F11F_8E6C_41E4_D320883E1082, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, true)",
   "camera": "this.panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 53, 54); this.keepComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, false); this.setComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, true, -1, this.effect_EC7C5454_F11F_8E6C_41B6_C5090C65A354, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7",
   "end": "this.setComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, false, -1, this.effect_E48C7798_F108_8AE4_41E0_BE208DFCC51D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, true)",
   "camera": "this.panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 54, 55); this.keepComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, false); this.setComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, true, -1, this.effect_E48C6798_F108_8AE4_41E3_02D6ABA476CB, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F289051C_E96A_535D_41B7_9177F6FFFD17",
   "camera": "this.panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 55, 56)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3",
   "camera": "this.panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 56, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 6.25,
  "class": "PanoramaCameraPosition",
  "pitch": -6.77
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_camera",
 "class": "PanoramaCamera"
},
{
 "id": "effect_E48C9795_F108_8AEC_41E4_7CDDB6F08C9F",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "media": "this.panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721",
   "end": "this.setComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, false, -1, this.effect_2945A0BD_30F7_DB47_41BC_CCE46AF5B1FE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, true)",
   "camera": "this.panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B50C9E5D_A0AB_CFD4_41DC_5943614E759B_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, false); this.setComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, true, -1, this.effect_2945B0BD_30F7_DB47_41C0_9852F833F17A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A",
   "end": "this.setComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, false, -1, this.effect_2A75FC80_30F5_4B3C_41C0_F62F3F85C778, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, true)",
   "camera": "this.panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B50C9E5D_A0AB_CFD4_41DC_5943614E759B_playlist, 1, 2); this.keepComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, false); this.setComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, true, -1, this.effect_2A75CC7F_30F5_4BC4_419B_E538E4CF410C, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C",
   "camera": "this.panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B50C9E5D_A0AB_CFD4_41DC_5943614E759B_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33",
   "camera": "this.panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B50C9E5D_A0AB_CFD4_41DC_5943614E759B_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81",
   "camera": "this.panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B50C9E5D_A0AB_CFD4_41DC_5943614E759B_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241",
   "end": "this.setComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, false, -1, this.effect_C9DB9B6F_EF2E_3B6C_419E_8FAECA5774BC, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, true)",
   "camera": "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B50C9E5D_A0AB_CFD4_41DC_5943614E759B_playlist, 5, 0); this.keepComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, false); this.setComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, true, -1, this.effect_C9DB4B6F_EF2E_3B6C_41DE_1D364528B779, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_B50C9E5D_A0AB_CFD4_41DC_5943614E759B_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "STAGE",
 "hfovMin": "135%",
 "id": "panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F256FFFC_E957_CEDD_41C7_DC3F70818996",
  "this.overlay_F51ABF09_E956_CF26_41E6_C4CE470FB9B7",
  "this.panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_tcap0",
  "this.overlay_E4654A55_EBAF_4F16_41D3_AE64ACF59046"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F289051C_E96A_535D_41B7_9177F6FFFD17"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E46E0E13_E92E_512B_41E7_808D1FF14891"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 25.48,
  "class": "PanoramaCameraPosition",
  "pitch": -22.62
 },
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 25.48,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90,
  "stereographicFactor": 1
 },
 "id": "panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": -22.62,
   "targetStereographicFactor": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ]
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sj od10",
 "hfovMin": "135%",
 "id": "panorama_F289051C_E96A_535D_41B7_9177F6FFFD17",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F56D4233_E96B_F16B_41BC_03662C9E0F16",
  "this.overlay_F517933D_E96A_D75F_41BA_1535B3A451A4",
  "this.overlay_F532572C_E96E_DF7E_41E4_0ED928BB6327",
  "this.overlay_F58A5E69_E96E_71E7_41E5_F3F2251EC924",
  "this.overlay_FAEEE8F8_EB8C_B19F_41E9_4911FBEB124F",
  "this.panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_t.jpg",
 "hfovMax": 130
},
{
 "id": "effect_E48C7798_F108_8AE4_41E0_BE208DFCC51D",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 159.57,
  "class": "PanoramaCameraPosition",
  "pitch": -5.52
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_F106089E_E795_6FF9_41D7_99293685C20F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "id": "effect_2945F0CF_30F7_DCC3_415C_D07BAB4556B4",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "CLI BUSINESS OFFICE",
 "hfovMin": "135%",
 "id": "panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F19A2762_E3B0_4ED9_41D3_A82D37E1CC62",
  "this.overlay_F1CB7EAB_E3B0_5FAF_41E6_67C531A1035E",
  "this.overlay_F1B51493_E3B0_C27F_41C6_3ACDB7E7199F",
  "this.overlay_F0911C0C_E3D3_4FE8_41D0_919592F8E3F4",
  "this.overlay_F0E55FBE_E3D2_C829_41DB_EFA88EBFBAD1",
  "this.panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_F692A634_E81E_9379_41D7_20B83BFD553D",
   "end": "this.setComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, false, -1, this.effect_2945E0CF_30F7_DCC3_41A4_060602DAC600, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, true)",
   "camera": "this.panorama_F692A634_E81E_9379_41D7_20B83BFD553D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AC6E3E45_E86E_9318_41DF_9F94DB64D8CB_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, false); this.setComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, true, -1, this.effect_2945F0CF_30F7_DCC3_415C_D07BAB4556B4, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C8A95B32_E825_B178_41D5_56799875B2B3",
   "camera": "this.panorama_C8A95B32_E825_B178_41D5_56799875B2B3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AC6E3E45_E86E_9318_41DF_9F94DB64D8CB_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C541BE94_E81A_F339_41DA_C3229365F03C",
   "camera": "this.panorama_C541BE94_E81A_F339_41DA_C3229365F03C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AC6E3E45_E86E_9318_41DF_9F94DB64D8CB_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6DAEC85_E86F_9718_41D9_94E028D33568",
   "camera": "this.panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AC6E3E45_E86E_9318_41DF_9F94DB64D8CB_playlist, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_AC6E3E45_E86E_9318_41DF_9F94DB64D8CB_playlist",
 "class": "PlayList"
},
{
 "id": "effect_EC7C5454_F11F_8E6C_41B6_C5090C65A354",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 58.58,
  "class": "PanoramaCameraPosition",
  "pitch": -12.32
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_camera",
 "class": "PanoramaCamera"
},
{
 "id": "effect_C9DB4B6F_EF2E_3B6C_41DE_1D364528B779",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_FB36A55D_EBAF_C516_41C5_BE9A6A5824C5.ogg",
  "class": "AudioResource"
 },
 "id": "audio_FB36A55D_EBAF_C516_41C5_BE9A6A5824C5",
 "data": {
  "label": "stage"
 },
 "class": "MediaAudio"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "cli g3",
 "hfovMin": "135%",
 "id": "panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F123A4E3_E390_C3DF_41E0_8322E3461393",
  "this.overlay_F600E6E9_E390_4FAB_41EB_216C922882C6",
  "this.overlay_F6DF3378_E390_46AA_41E6_8D3805487A37",
  "this.overlay_F17C80E8_E390_43A9_41E6_A779310396A3",
  "this.panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -51.42,
  "class": "PanoramaCameraPosition",
  "pitch": -4.5
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_camera",
 "class": "PanoramaCamera"
},
{
 "id": "effect_294510D6_30F7_DCC5_41A1_A09DFD895A63",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -14.2,
  "class": "PanoramaCameraPosition",
  "pitch": -9.68
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "be 2f3",
 "hfovMin": "135%",
 "id": "panorama_F791628E_E7EE_9328_41EB_988EBF482C48",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F673A956_E7E5_7139_41E2_CB3EBDD1648B",
  "this.panorama_F791628E_E7EE_9328_41EB_988EBF482C48_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "JUNIOR HIGH GROUND FLOOR",
 "hfovMin": "135%",
 "id": "panorama_F692A634_E81E_9379_41D7_20B83BFD553D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F71D87F6_E825_70F8_41E0_9C00FB2C0D6D",
  "this.overlay_CBF4D194_E82E_9138_41EB_01867C860FBC",
  "this.overlay_CD43D9E7_E82D_90E7_41E8_C80F55ED6668",
  "this.overlay_B01930E0_E8EF_8F19_41B8_0F3DB5F30354",
  "this.overlay_FF97D0D4_E936_D12D_41EC_3412F129B73F",
  "this.panorama_F692A634_E81E_9379_41D7_20B83BFD553D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A5999678_E81E_93E9_41E5_6F99159B9343"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8A95B32_E825_B178_41D5_56799875B2B3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E46E0E13_E92E_512B_41E7_808D1FF14891"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_FD8A2325_E97B_5754_41D8_D1B73696DB71",
   "x": 1682.48,
   "angle": 352.49,
   "y": 3055.51,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -113.6,
  "class": "PanoramaCameraPosition",
  "pitch": -16.18
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C82D4E91_E825_9338_41D4_80F12504B135_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -117.22,
  "class": "PanoramaCameraPosition",
  "pitch": -0.77
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -82.29,
  "class": "PanoramaCameraPosition",
  "pitch": -10.9
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -121.85,
  "class": "PanoramaCameraPosition",
  "pitch": -9.29
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721",
   "end": "this.setComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, false, -1, this.effect_2945A0BD_30F7_DB47_41BC_CCE46AF5B1FE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, true)",
   "camera": "this.panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B5327F52_A0AB_4D2D_41D7_51D5F5899E68_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, false); this.setComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, true, -1, this.effect_2945B0BD_30F7_DB47_41C0_9852F833F17A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A",
   "end": "this.setComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, false, -1, this.effect_2A75FC80_30F5_4B3C_41C0_F62F3F85C778, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, true)",
   "camera": "this.panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B5327F52_A0AB_4D2D_41D7_51D5F5899E68_playlist, 1, 2); this.keepComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, false); this.setComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, true, -1, this.effect_2A75CC7F_30F5_4BC4_419B_E538E4CF410C, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4",
   "end": "this.setComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, false, -1, this.effect_EC7C7454_F11F_8E6C_41E4_D320883E1082, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, true)",
   "camera": "this.panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B5327F52_A0AB_4D2D_41D7_51D5F5899E68_playlist, 2, 3); this.keepComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, false); this.setComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, true, -1, this.effect_EC7C5454_F11F_8E6C_41B6_C5090C65A354, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7",
   "end": "this.setComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, false, -1, this.effect_E48C7798_F108_8AE4_41E0_BE208DFCC51D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, true)",
   "camera": "this.panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_B5327F52_A0AB_4D2D_41D7_51D5F5899E68_playlist, 3, 0); this.keepComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, false); this.setComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, true, -1, this.effect_E48C6798_F108_8AE4_41E3_02D6ABA476CB, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_B5327F52_A0AB_4D2D_41D7_51D5F5899E68_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 176.6,
  "class": "PanoramaCameraPosition",
  "pitch": -14.13
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 134.76,
  "class": "PanoramaCameraPosition",
  "pitch": -11.46
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_camera",
 "class": "PanoramaCamera"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_FD8A2325_E97B_5754_41D8_D1B73696DB71",
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 5255,
 "label": "campus map",
 "image": {
  "levels": [
   {
    "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71.png",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1968
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_FB47FF85_E98B_AF54_41B6_AB21CE7406CC",
  "this.overlay_FAA9729C_E98B_517B_41D8_35ED923611C5",
  "this.overlay_FA053D73_E98A_B3CC_41E7_8F7D21DE0291",
  "this.overlay_FB3CD55A_E98A_D3FC_41C2_C0D40B66E358",
  "this.overlay_FA8E471E_E98D_7F75_41E8_1396F8F033B8",
  "this.overlay_FA3C43B1_E98D_D74C_417A_7D148B722DDB"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_t.png",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "height": 3232
},
{
 "initialPosition": {
  "yaw": -150.78,
  "class": "PanoramaCameraPosition",
  "pitch": -8.42
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C541BE94_E81A_F339_41DA_C3229365F03C_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "CLI ROOFTOP",
 "hfovMin": "135%",
 "id": "panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FA9CE522_E3BD_59D8_41E2_0034C8EE7DDF",
  "this.overlay_FA589AC0_E3BE_C859_41EB_3AD8151B366C",
  "this.overlay_F9C6EA05_E3BE_CBDB_41E3_CB8034AA60E2",
  "this.overlay_F9A1FEF2_E3BD_4839_41C2_9312E3561801",
  "this.panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -13.15,
  "class": "PanoramaCameraPosition",
  "pitch": -9.12
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F791628E_E7EE_9328_41EB_988EBF482C48_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "cli 3f2",
 "hfovMin": "135%",
 "id": "panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F6AAE916_E3F5_49F9_41E9_5CFB6008DAC3",
  "this.overlay_F6A1471F_E3F5_59E8_41D7_DCD8E90D391C",
  "this.panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -130.76,
  "class": "PanoramaCameraPosition",
  "pitch": -18.21
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "SENIOR HIGH 2ND FLOOR",
 "hfovMin": "135%",
 "id": "panorama_A77061C0_E81E_B119_41E9_2BC2300729D6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_B9C34911_E81B_9138_41D9_74EA6446DF02",
  "this.overlay_BB0D2FFD_E8E6_90E8_41CD_94682A45EE6A",
  "this.overlay_BE33D56C_E8E5_B1E8_41E9_EAE928A6951F",
  "this.overlay_BFFCAD9A_E8EA_F129_41D2_C22EE7E1BE1C",
  "this.panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A5999678_E81E_93E9_41E5_6F99159B9343"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_t.jpg",
 "hfovMax": 130
},
{
 "id": "effect_2A75CC7F_30F5_4BC4_419B_E538E4CF410C",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sj od11",
 "hfovMin": "135%",
 "id": "panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F8A7B819_EB83_B09E_41CF_B7C980164BF6",
  "this.overlay_FFB085E0_EB84_73AF_41E6_27E23434FEE4",
  "this.panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F289051C_E96A_535D_41B7_9177F6FFFD17"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 42.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0.11
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_camera",
 "class": "PanoramaCamera"
},
{
 "id": "effect_EC7C7454_F11F_8E6C_41E4_D320883E1082",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "id": "effect_2945C0C8_30F7_DCCD_4195_9D64D10B4F38",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "CAFETERIA",
 "hfovMin": "135%",
 "id": "panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F4BF6660_E96A_31E5_41DE_FE629A5E770E",
  "this.overlay_C8E5754B_E976_333B_41E1_A697EF96EBB4",
  "this.overlay_C885D3D5_E976_372F_41E1_F9DC434B9C98",
  "this.panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_tcap0",
  "this.overlay_FB8AE1CD_EBA1_DD76_41CB_EAE317126E4A",
  "this.overlay_8B8C1C28_9807_A320_41D3_0ABFAF333C0A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F289051C_E96A_535D_41B7_9177F6FFFD17"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E46E0E13_E92E_512B_41E7_808D1FF14891"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -148.81,
  "class": "PanoramaCameraPosition",
  "pitch": -7.86
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -0.94,
  "class": "PanoramaCameraPosition",
  "pitch": -12.91
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_FD8A2325_E97B_5754_41D8_D1B73696DB71",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_374C46E9_38EC_23E3_41C9_7953A83FF1E3",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "cli 2f2",
 "hfovMin": "135%",
 "id": "panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F0E587C8_E3DD_3868_41D5_A3E2DD90C018",
  "this.overlay_F10818E1_E3D3_4858_41E2_B286533BF9D1",
  "this.overlay_F1754707_E3D3_D9E7_41E2_EE0A5B13D2B9",
  "this.overlay_F0964D36_E3D3_4838_41D2_142DE7112B01",
  "this.overlay_F107DCF3_E3D6_C83F_41E4_673FFD688AB2",
  "this.overlay_F0FB8146_E3D7_5858_41D5_16B856317775",
  "this.panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 49.16,
  "class": "PanoramaCameraPosition",
  "pitch": -4.94
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "CLI 3RD FLOOR",
 "hfovMin": "135%",
 "id": "panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F73014BA_E3FD_F828_41DA_72D026C63FE6",
  "this.overlay_F6C79729_E3F3_3828_41EA_8457891B4885",
  "this.overlay_F5EC6F93_E3F5_48F8_41E3_2BBBB1FE2E4F",
  "this.overlay_F4AEEDA9_E3D2_C828_41D6_44C1054C50FE",
  "this.overlay_F4F6E660_E3CD_5858_41E3_6BA773210C61",
  "this.panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "AERIAL BACK",
 "hfovMin": "135%",
 "id": "panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F128D436_E2F9_CC05_41C8_B0673654A50A",
  "this.overlay_F9494BFB_E338_C403_41EA_0FC8A3680747",
  "this.overlay_F98AC33E_E338_4405_41D7_F678E1C242B1",
  "this.overlay_F99CB6B7_E339_CC03_41C8_7EE07D7FD8D0",
  "this.overlay_F9804D45_E338_5C07_4167_897C81F8E0E8",
  "this.overlay_F981C74E_E338_CC05_41D9_83D63C243ED6",
  "this.overlay_F94B5AC4_E338_C405_41A1_17015B458B23",
  "this.overlay_F71ADB70_E6F7_BDFE_41E6_29EFBB38E829",
  "this.overlay_D4A3417F_E866_B1E8_41CF_69FC95FFA545"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "cli 2f3",
 "hfovMin": "135%",
 "id": "panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F0927EA6_E3D6_C8D8_41E9_2B181C9D17F4",
  "this.overlay_F1354F85_E3D5_48DB_41E6_FDF4EB29019C",
  "this.overlay_F0CADED8_E3D5_C86A_41D8_025ECB0AF90B",
  "this.overlay_F7CA5F53_E3F5_487F_41E3_8E158F88930B",
  "this.overlay_F724DD63_E3F3_485F_41E7_8B883389B2A5",
  "this.panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -53.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0.17
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "CLI 4TH FLOOR",
 "hfovMin": "135%",
 "id": "panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FA54998A_E3CD_48E9_41E8_6395D285E526",
  "this.overlay_FB66DA75_E3CF_C838_41E1_DE369B642A32",
  "this.overlay_FAC4FE8E_E3CD_C8E9_41EA_3319D66DFBB8",
  "this.overlay_FA2FBFAF_E3B6_C827_41EC_11B45E1C318C",
  "this.overlay_FA2F6DF1_E3B6_C83B_41D3_BB6B954D979B",
  "this.panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "be 1f2",
 "hfovMin": "135%",
 "id": "panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F3848453_E79D_A74E_41E9_F26B84F9FBDD",
  "this.panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_t.jpg",
 "hfovMax": 130
},
{
 "id": "effect_2945E0CF_30F7_DCC3_41A4_060602DAC600",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "be 2f2",
 "hfovMin": "135%",
 "id": "panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F6FB1A28_E7EA_9368_41E8_C76D01C18FB8",
  "this.panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sh 1f6R",
 "hfovMin": "135%",
 "id": "panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5",
 "class": "Panorama",
 "overlays": [
  "this.overlay_A09C7BDE_E82B_9129_41CB_2C8128E7850B",
  "this.panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 98.92,
  "class": "PanoramaCameraPosition",
  "pitch": -0.67
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "JUNIOR HIGH 4TH FLOOR",
 "hfovMin": "135%",
 "id": "panorama_C6DAEC85_E86F_9718_41D9_94E028D33568",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D905B40B_E865_7728_41D8_6A7E4FD9ABF5",
  "this.overlay_DDA1DAB1_E865_7378_41E9_4708C01C3890",
  "this.overlay_DC2488ED_E87B_90E8_41D5_A32EE30E15E2",
  "this.overlay_DD31B476_E87B_97F9_41DA_377BCB211561",
  "this.panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C64F66C0_E86F_7318_41E5_65547DB5D144"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C541BE94_E81A_F339_41DA_C3229365F03C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sj od5",
 "hfovMin": "135%",
 "id": "panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F7DF305C_E6ED_CB25_41C8_DCAAFB04060F",
  "this.overlay_F73021E1_E6EC_4D1F_41D1_C18315211755",
  "this.overlay_F7AF0244_E6EC_CF26_41C9_D858BCF8DE4A",
  "this.overlay_F7D72D6B_E6F3_B5E2_41E4_3366CAE0A7EA",
  "this.overlay_F747B77F_E777_A137_41E1_01BCC796A546",
  "this.panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_t.jpg",
 "hfovMax": 130
},
{
 "id": "effect_21F99D74_30ED_45C4_41B9_F8AA023E3378",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_FA2641DB_EBA1_3D12_41E8_443C85917C1E.ogg",
  "class": "AudioResource"
 },
 "id": "audio_FA2641DB_EBA1_3D12_41E8_443C85917C1E",
 "data": {
  "label": "basic education and junior high school"
 },
 "class": "MediaAudio"
},
{
 "initialPosition": {
  "yaw": -141.33,
  "class": "PanoramaCameraPosition",
  "pitch": -4.12
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 15.17,
  "class": "PanoramaCameraPosition",
  "pitch": -46.49
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sh 1f2",
 "hfovMin": "135%",
 "id": "panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA",
 "class": "Panorama",
 "overlays": [
  "this.overlay_AB31A2D3_E825_F33F_41CF_5EF5F2B0FE04",
  "this.overlay_A350B3C5_E82F_911B_41D2_8FCE5D26A124",
  "this.overlay_A4CED88D_E82D_9F28_41DE_3C68108D4134",
  "this.overlay_A7FF3C09_E81E_972B_41E8_5D1417325E5D",
  "this.overlay_A75552A2_E81D_9319_41E9_C87E881B630B",
  "this.overlay_C98D0F24_E976_4F6D_41E5_D580E0EA002F",
  "this.overlay_C8D631B4_E97A_D36D_41E5_CCC5F873FFED",
  "this.panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D577A608_E81B_B329_41E8_6E556B806394"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A77061C0_E81E_B119_41E9_2BC2300729D6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_FD8A2325_E97B_5754_41D8_D1B73696DB71",
   "x": 1576.82,
   "angle": 170.83,
   "y": 1694.23,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_t.jpg",
 "hfovMax": 130
},
{
 "id": "effect_2945B0BD_30F7_DB47_41C0_9852F833F17A",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -36.9,
  "class": "PanoramaCameraPosition",
  "pitch": -4.11
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_camera",
 "class": "PanoramaCamera"
},
{
 "id": "effect_C653610F_EF2A_04AC_41DA_F19C9FC0D833",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 117.63,
  "class": "PanoramaCameraPosition",
  "pitch": -4.98
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "jh 2f2",
 "hfovMin": "135%",
 "id": "panorama_C85BA560_E825_9119_41E4_1E69324259B3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CA7C3A29_E82D_9368_41DE_EA2DFC04DF27",
  "this.panorama_C85BA560_E825_9119_41E4_1E69324259B3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8A95B32_E825_B178_41D5_56799875B2B3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 32.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0.99
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_camera",
 "class": "PanoramaCamera"
},
{
 "id": "effect_2A75FC80_30F5_4B3C_41C0_F62F3F85C778",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "AERIAL CENTER",
 "hfovMin": "135%",
 "id": "panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F36F264A_E2FF_CC0D_41E8_614251285653",
  "this.overlay_F35023C8_E2F8_440D_41A4_897809C0F016",
  "this.overlay_F4C0C3C2_E328_447D_4185_E6AAF615A67A",
  "this.overlay_F4CB1BAD_E328_C407_41AA_93240ACB9CDE",
  "this.overlay_F4CE8F6D_E328_3C07_41EA_1A51974AD92E",
  "this.overlay_F4C8A375_E328_4407_41D5_0756382EBAD2",
  "this.overlay_FBB01F69_E328_5C0F_41E4_4605D92FB980",
  "this.overlay_FA228B43_E328_C403_41BA_E1D108793CB2",
  "this.overlay_FB22CE6A_E328_5C0D_41EA_D81C43B5C709",
  "this.overlay_FBBF8550_E337_CC1D_41C4_3BBF995DEB43",
  "this.overlay_F3EF167B_E390_4EAF_41DF_50B2429B1C0F",
  "this.overlay_F3EE13E3_E390_C5DF_41DF_6AD80C8E4B01",
  "this.overlay_F3A4D8B1_E390_43BA_41C0_47FDB7472C1F",
  "this.overlay_F2D4206C_E3B0_42A9_41AA_029AF9276166",
  "this.overlay_F422353B_E6F4_B562_41D5_F80F0E4FE92C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -16.09,
  "class": "PanoramaCameraPosition",
  "pitch": -7.3
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F692A634_E81E_9379_41D7_20B83BFD553D_camera",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained",
 "class": "MapPlayer"
},
{
 "id": "effect_21F67D74_30ED_45C4_41BB_4A1798500616",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_F642562A_EBA1_4732_41BA_FF8C465AAD8E.ogg",
  "class": "AudioResource"
 },
 "id": "audio_F642562A_EBA1_4732_41BA_FF8C465AAD8E",
 "data": {
  "label": "welcome to sanjuan"
 },
 "class": "PanoramaAudio"
},
{
 "initialPosition": {
  "yaw": 2.06,
  "class": "PanoramaCameraPosition",
  "pitch": -5.49
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sh 1f3R",
 "hfovMin": "135%",
 "id": "panorama_D577A608_E81B_B329_41E8_6E556B806394",
 "class": "Panorama",
 "overlays": [
  "this.overlay_A309671B_E82E_B128_41C0_B759E595871E",
  "this.panorama_D577A608_E81B_B329_41E8_6E556B806394_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "cli 3f3",
 "hfovMin": "135%",
 "id": "panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F5E89122_E3F7_D9D8_41C6_727C1A31CABC",
  "this.overlay_F6674DE8_E3F5_4828_41D6_59BA8A1646C5",
  "this.overlay_F60D7B2F_E3F2_C828_41E8_45AFF58026B8",
  "this.overlay_F544D269_E3CD_F82B_41D1_86445C4096E2",
  "this.overlay_FBA99932_E3D5_4838_41D1_EFDC5804EEE6",
  "this.overlay_FA6CE5B4_E3D5_3839_41E3_76D5B401AA5B",
  "this.overlay_F42B0861_E3D3_485B_41EB_911F3EEFFC12",
  "this.panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sj od6",
 "hfovMin": "135%",
 "id": "panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E8EA141F_E773_66F7_41E1_CDCB20F59232",
  "this.overlay_E829682A_E772_AED9_41EB_639FC6CCC4A8",
  "this.overlay_E832D480_E775_E7C9_41DD_7122364D843A",
  "this.overlay_F6572B34_E773_62C9_41DE_BF2A21AD36AE",
  "this.overlay_F648A6B3_E773_63CF_41A0_E23A56E73FA2",
  "this.overlay_F6969D73_E772_E14F_41C9_FB0461F55C5D",
  "this.overlay_F53E1FCB_E77D_A158_41E8_889322AB6DD9",
  "this.overlay_F68CF6B2_E77D_A3C9_41BD_DD698B59949A",
  "this.overlay_F6C5FBB7_E77F_6137_41CE_3675F0F669DB",
  "this.overlay_F597A742_E77D_A149_41E6_F9C92AE380D1",
  "this.overlay_F37596F8_E773_A339_41D2_E5AA41FB0027",
  "this.overlay_A9B7EAEC_E82A_B0E8_41E9_A8CD3CE920C4",
  "this.panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_FD8A2325_E97B_5754_41D8_D1B73696DB71",
   "x": 3037.5,
   "angle": 357.92,
   "y": 1035.14,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84",
   "end": "this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false, -1, this.effect_C654A10F_EF2A_04AC_41D5_81142A336D3F, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true)",
   "camera": "this.panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false); this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true, -1, this.effect_C653610F_EF2A_04AC_41DA_F19C9FC0D833, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB",
   "end": "this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false, -1, this.effect_21F98D73_30ED_45DC_41BC_8F41D4553FD3, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true)",
   "camera": "this.panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false); this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true, -1, this.effect_21F9BD73_30ED_45DC_41B3_0DF608BF5DD5, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B",
   "end": "this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false, -1, this.effect_21F67D74_30ED_45C4_41BB_4A1798500616, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true)",
   "camera": "this.panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false); this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true, -1, this.effect_21F99D74_30ED_45C4_41B9_F8AA023E3378, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807",
   "camera": "this.panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721",
   "end": "this.setComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, false, -1, this.effect_2945A0BD_30F7_DB47_41BC_CCE46AF5B1FE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, true)",
   "camera": "this.panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, false); this.setComponentVisibility(this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0, true, -1, this.effect_2945B0BD_30F7_DB47_41C0_9852F833F17A, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB",
   "camera": "this.panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  "this.PanoramaPlayListItem_374A26EE_38EC_23E1_41B6_A7DF40EC70C4",
  {
   "media": "this.panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C",
   "camera": "this.panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184",
   "camera": "this.panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371",
   "camera": "this.panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33",
   "camera": "this.panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B",
   "camera": "this.panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807",
   "camera": "this.panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81",
   "camera": "this.panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35",
   "camera": "this.panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53",
   "camera": "this.panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D",
   "camera": "this.panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  "this.PanoramaPlayListItem_374656F0_38EC_23E1_4185_FAEE7B1BCEB9",
  {
   "media": "this.panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8",
   "camera": "this.panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F106089E_E795_6FF9_41D7_99293685C20F",
   "camera": "this.panorama_F106089E_E795_6FF9_41D7_99293685C20F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598",
   "camera": "this.panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9",
   "camera": "this.panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F791628E_E7EE_9328_41EB_988EBF482C48",
   "camera": "this.panorama_F791628E_E7EE_9328_41EB_988EBF482C48_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F1361002_E7FA_8F19_41B6_A21F5639310F",
   "camera": "this.panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4",
   "camera": "this.panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739",
   "camera": "this.panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  "this.PanoramaPlayListItem_375C36F2_38EC_23E1_41AB_BAE5041B53B0",
  {
   "media": "this.panorama_C8A95B32_E825_B178_41D5_56799875B2B3",
   "camera": "this.panorama_C8A95B32_E825_B178_41D5_56799875B2B3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C85BA560_E825_9119_41E4_1E69324259B3",
   "camera": "this.panorama_C85BA560_E825_9119_41E4_1E69324259B3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C82D4E91_E825_9338_41D4_80F12504B135",
   "camera": "this.panorama_C82D4E91_E825_9338_41D4_80F12504B135_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C541BE94_E81A_F339_41DA_C3229365F03C",
   "camera": "this.panorama_C541BE94_E81A_F339_41DA_C3229365F03C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5",
   "camera": "this.panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6",
   "camera": "this.panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6DAEC85_E86F_9718_41D9_94E028D33568",
   "camera": "this.panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C64F66C0_E86F_7318_41E5_65547DB5D144",
   "camera": "this.panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3",
   "camera": "this.panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96",
   "end": "this.setComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, false, -1, this.effect_294500D7_30F7_DCC3_4181_048D77176BBE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, true)",
   "camera": "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37); this.keepComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, false); this.setComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, true, -1, this.effect_294510D6_30F7_DCC5_41A1_A09DFD895A63, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  "this.PanoramaPlayListItem_3758E6F4_38EC_23E1_41BE_92AFD557AEDA",
  {
   "media": "this.panorama_D577A608_E81B_B329_41E8_6E556B806394",
   "camera": "this.panorama_D577A608_E81B_B329_41E8_6E556B806394_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11",
   "camera": "this.panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D57417BF_E81B_9167_41EC_746462EACC45",
   "camera": "this.panorama_D57417BF_E81B_9167_41EC_746462EACC45_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5",
   "camera": "this.panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E",
   "camera": "this.panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A77061C0_E81E_B119_41E9_2BC2300729D6",
   "camera": "this.panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E",
   "camera": "this.panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A5999678_E81E_93E9_41E5_6F99159B9343",
   "camera": "this.panorama_A5999678_E81E_93E9_41E5_6F99159B9343_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72",
   "camera": "this.panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB",
   "end": "this.setComponentVisibility(this.HTMLText_E5C2B7BC_F10B_8A1C_41D0_02810B92D5A4, false, -1, this.effect_E48C9795_F108_8AEC_41E4_7CDDB6F08C9F, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E5C2B7BC_F10B_8A1C_41D0_02810B92D5A4, true)",
   "camera": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48); this.keepComponentVisibility(this.HTMLText_E5C2B7BC_F10B_8A1C_41D0_02810B92D5A4, false); this.setComponentVisibility(this.HTMLText_E5C2B7BC_F10B_8A1C_41D0_02810B92D5A4, true, -1, this.effect_E48C8795_F108_8AEC_41B0_386A6987464B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130",
   "camera": "this.panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  "this.PanoramaPlayListItem_375486F5_38EC_23E3_41BB_AF8F264D9FC7",
  {
   "media": "this.panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07",
   "camera": "this.panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  "this.PanoramaPlayListItem_375666F5_38EC_23E3_41C9_7B3B3981507C",
  {
   "media": "this.panorama_E46E0E13_E92E_512B_41E7_808D1FF14891",
   "camera": "this.panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4",
   "end": "this.setComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, false, -1, this.effect_EC7C7454_F11F_8E6C_41E4_D320883E1082, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, true)",
   "camera": "this.panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54); this.keepComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, false); this.setComponentVisibility(this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC, true, -1, this.effect_EC7C5454_F11F_8E6C_41B6_C5090C65A354, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7",
   "end": "this.setComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, false, -1, this.effect_E48C7798_F108_8AE4_41E0_BE208DFCC51D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, true)",
   "camera": "this.panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55); this.keepComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, false); this.setComponentVisibility(this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD, true, -1, this.effect_E48C6798_F108_8AE4_41E3_02D6ABA476CB, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F289051C_E96A_535D_41B7_9177F6FFFD17",
   "camera": "this.panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 52.73,
  "class": "PanoramaCameraPosition",
  "pitch": -13.14
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "CLI LIBRARY",
 "hfovMin": "135%",
 "id": "panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F0425380_E39F_C659_41E9_1D61B148D882",
  "this.overlay_F7AA3492_E390_427E_415A_C91DEA53ABDA",
  "this.overlay_F0D82FEB_E390_3DAE_41BD_D85FA65B2206",
  "this.overlay_F75AE323_E390_465F_41E6_564039098BE6",
  "this.overlay_F7DB595E_E390_42E9_41E1_0C1F4062B76F",
  "this.overlay_F01F8A50_E390_46F9_41D0_F943ED2A972E",
  "this.overlay_F66E6FA9_E390_3DAB_41EA_30534C70D765",
  "this.panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_tcap0",
  "this.overlay_E49C6BE0_EBA7_4D2E_41E5_C245A5462F36"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_FD8A2325_E97B_5754_41D8_D1B73696DB71",
   "x": 3215.54,
   "angle": 0,
   "y": 2482.36,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "jh 4f3",
 "hfovMin": "135%",
 "id": "panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DC958806_E87A_9F19_41EC_6A8F7F2CCEF7",
  "this.panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6DAEC85_E86F_9718_41D9_94E028D33568"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_F969F5A7_EBA1_C532_41C1_4AA0CA000271.ogg",
  "class": "AudioResource"
 },
 "id": "audio_F969F5A7_EBA1_C532_41C1_4AA0CA000271",
 "data": {
  "label": "library"
 },
 "class": "MediaAudio"
},
{
 "id": "effect_C654A10F_EF2A_04AC_41D5_81142A336D3F",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -136.96,
  "class": "PanoramaCameraPosition",
  "pitch": -7.88
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "CLI 2ND FLOOR",
 "hfovMin": "135%",
 "id": "panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F33BE341_E3BD_585B_41C7_3DD87C423F72",
  "this.overlay_F1B6A9A4_E3CD_C8D9_41E7_2CB5B242FFFC",
  "this.overlay_F08129B6_E3D7_C838_41E7_A3C3DCA5EF98",
  "this.overlay_F0302018_E3F2_F7E9_41E1_AD41E5F0BBC2",
  "this.overlay_F034CE00_E3FD_4BD9_41CD_2F3FBEE5D408",
  "this.panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "cli 4f3",
 "hfovMin": "135%",
 "id": "panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FB305E4C_E3B2_C868_41E0_5B1439F760EE",
  "this.overlay_FB432182_E3B5_D8D9_41D4_A5927805F5BB",
  "this.overlay_FB34A334_E3B5_5838_41EA_0324D7B8CF9B",
  "this.overlay_F9C513FE_E3B3_3829_41EB_54AEDF29374A",
  "this.overlay_F981A72C_E3B5_D829_41EA_0AC0246C25D4",
  "this.panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 40.28,
  "class": "PanoramaCameraPosition",
  "pitch": 1.81
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "BASIC ED GROUND FLOOR",
 "hfovMin": "135%",
 "id": "panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F422AD4E_E796_A159_41DB_454247D6C30C",
  "this.overlay_F3B33726_E792_E2C9_41E3_99DC42D665E3",
  "this.overlay_F3D783D5_E793_A14B_41CC_BA53F3E59734",
  "this.overlay_F30633C6_E793_A149_41BC_023900EB9D43",
  "this.overlay_F54D2845_E7E6_9F1B_41DA_F334DE701B14",
  "this.overlay_FF4FB919_E937_D327_41BE_EE5CCD75FB3E",
  "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E46E0E13_E92E_512B_41E7_808D1FF14891"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F106089E_E795_6FF9_41D7_99293685C20F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_FD8A2325_E97B_5754_41D8_D1B73696DB71",
   "x": 425.4,
   "angle": -5.41,
   "y": 3000.07,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "jh 4f2",
 "hfovMin": "135%",
 "id": "panorama_C64F66C0_E86F_7318_41E5_65547DB5D144",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DC771072_E865_8FF9_41EC_380AA52F5E60",
  "this.panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6DAEC85_E86F_9718_41D9_94E028D33568"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_CDBC8786_EBE1_45F2_41EC_305DA7EA62BD.ogg",
  "class": "AudioResource"
 },
 "id": "audio_CDBC8786_EBE1_45F2_41EC_305DA7EA62BD",
 "data": {
  "label": "sj-bgm"
 },
 "class": "MediaAudio"
},
{
 "items": [
  {
   "media": "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8",
   "end": "this.setComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, false, -1, this.effect_2945C0C8_30F7_DCCD_4195_9D64D10B4F38, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, true)",
   "camera": "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_FFB0FAC9_E7EE_B32B_41D7_14040F3028C3_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, false); this.setComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, true, -1, this.effect_2945D0C7_30F7_DCC3_41A4_F84A34AB3630, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598",
   "camera": "this.panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_FFB0FAC9_E7EE_B32B_41D7_14040F3028C3_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F1361002_E7FA_8F19_41B6_A21F5639310F",
   "camera": "this.panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_FFB0FAC9_E7EE_B32B_41D7_14040F3028C3_playlist, 2, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_FFB0FAC9_E7EE_B32B_41D7_14040F3028C3_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -88.71,
  "class": "PanoramaCameraPosition",
  "pitch": -3.66
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sh 2f3",
 "hfovMin": "135%",
 "id": "panorama_A5999678_E81E_93E9_41E5_6F99159B9343",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BE6FFF22_E8EA_9119_41EA_475F677CF2AE",
  "this.overlay_B1A5B3F8_E8ED_90E9_41EC_0E730E83929B",
  "this.panorama_A5999678_E81E_93E9_41E5_6F99159B9343_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F692A634_E81E_9379_41D7_20B83BFD553D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A77061C0_E81E_B119_41E9_2BC2300729D6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 8.09,
  "class": "PanoramaCameraPosition",
  "pitch": -6.74
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "be 1f3",
 "hfovMin": "135%",
 "id": "panorama_F106089E_E795_6FF9_41D7_99293685C20F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F2B78F5D_E795_617B_41D1_9D768ABCB7F2",
  "this.panorama_F106089E_E795_6FF9_41D7_99293685C20F_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -41.95,
  "class": "PanoramaCameraPosition",
  "pitch": -8.47
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 53.74,
  "class": "PanoramaCameraPosition",
  "pitch": -3.9
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "cli 4f2",
 "hfovMin": "135%",
 "id": "panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FB417245_E3B3_3858_41E6_B19CD04329E3",
  "this.overlay_FBAC44B5_E3B3_7838_41E0_995BD7B1E1FD",
  "this.panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84",
   "end": "this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false, -1, this.effect_C654A10F_EF2A_04AC_41D5_81142A336D3F, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true)",
   "camera": "this.panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F0ED9970_E793_6149_41E6_D857883AD46E_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false); this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true, -1, this.effect_C653610F_EF2A_04AC_41DA_F19C9FC0D833, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB",
   "end": "this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false, -1, this.effect_21F98D73_30ED_45DC_41BC_8F41D4553FD3, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true)",
   "camera": "this.panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F0ED9970_E793_6149_41E6_D857883AD46E_playlist, 1, 2); this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false); this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true, -1, this.effect_21F9BD73_30ED_45DC_41B3_0DF608BF5DD5, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B",
   "end": "this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false, -1, this.effect_21F67D74_30ED_45C4_41BB_4A1798500616, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true)",
   "camera": "this.panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F0ED9970_E793_6149_41E6_D857883AD46E_playlist, 2, 0); this.keepComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, false); this.setComponentVisibility(this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39, true, -1, this.effect_21F99D74_30ED_45C4_41B9_F8AA023E3378, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_F0ED9970_E793_6149_41E6_D857883AD46E_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sh 1f4R",
 "hfovMin": "135%",
 "id": "panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11",
 "class": "Panorama",
 "overlays": [
  "this.overlay_A1D7E8A8_E82B_9F69_41EC_402E8276E8D6",
  "this.panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_t.jpg",
 "hfovMax": 130
},
{
 "id": "effect_21F9BD73_30ED_45DC_41B3_0DF608BF5DD5",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "JUNIOR HIGH 3RD FLOOR",
 "hfovMin": "135%",
 "id": "panorama_C541BE94_E81A_F339_41DA_C3229365F03C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CFB30CB5_E81E_9778_41D4_A9CCAA14CDF1",
  "this.overlay_C1603317_E81D_B127_41D1_DB120AEF4768",
  "this.overlay_C54EE111_E81A_B13B_41D6_B5728BFB34BF",
  "this.overlay_C389D251_E865_7338_41BF_7F8AF2FCF901",
  "this.overlay_C3CF0F03_E865_911F_41E0_8DAAA2EBBBFE",
  "this.overlay_C3A46BBF_E866_B167_41C3_E5DDF2A42004",
  "this.panorama_C541BE94_E81A_F339_41DA_C3229365F03C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6DAEC85_E86F_9718_41D9_94E028D33568"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C8A95B32_E825_B178_41D5_56799875B2B3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "JUNIOR HIGH 2ND FLOOR",
 "hfovMin": "135%",
 "id": "panorama_C8A95B32_E825_B178_41D5_56799875B2B3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CA2DE462_E82D_7719_41E4_E3F208636953",
  "this.overlay_CA9DF67B_E82E_B3EF_41D0_A44B2D6BBD7A",
  "this.overlay_CCEE9DFA_E82A_90E8_41AF_7505249C7016",
  "this.overlay_CD54EC32_E82B_9778_41D5_792695B06EB4",
  "this.overlay_CF18655B_E825_B12F_41E0_955AAFF55FC1",
  "this.overlay_CF056347_E826_F127_41E5_64863FA2E381",
  "this.panorama_C8A95B32_E825_B178_41D5_56799875B2B3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C82D4E91_E825_9338_41D4_80F12504B135"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C541BE94_E81A_F339_41DA_C3229365F03C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F692A634_E81E_9379_41D7_20B83BFD553D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C85BA560_E825_9119_41E4_1E69324259B3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_t.jpg",
 "hfovMax": 130
},
{
 "id": "effect_C9DB9B6F_EF2E_3B6C_419E_8FAECA5774BC",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "SENIOR HIGH GROUND FLOOR",
 "hfovMin": "135%",
 "id": "panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96",
 "class": "Panorama",
 "overlays": [
  "this.overlay_AFFE982D_E826_BF6B_41A1_AA2D35495325",
  "this.overlay_A047124C_E826_9329_41E1_93BAF7F600F9",
  "this.overlay_AE0CA5EA_E83B_90E8_41A5_6A427D795D1C",
  "this.overlay_AEC41A2B_E83B_936F_41E7_87125D6E01DA",
  "this.overlay_AFC10F63_E83B_911F_41E3_17AB02DFB792",
  "this.overlay_CDAD11E4_E97F_D2ED_41D3_C015C1FD181C",
  "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D57417BF_E81B_9167_41EC_746462EACC45"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "jh 3f3",
 "hfovMin": "135%",
 "id": "panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_CFE5407E_E81E_8FE8_41C4_69D7D1CE8271",
  "this.panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C541BE94_E81A_F339_41DA_C3229365F03C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_t.jpg",
 "hfovMax": 130
},
{
 "id": "effect_E48C6798_F108_8AE4_41E3_02D6ABA476CB",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_FD8A2325_E97B_5754_41D8_D1B73696DB71",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_374C06E9_38EC_23E3_41C6_946AF54BD547",
 "class": "PlayList"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_FA8F882A_EBA3_4B32_41E4_5F8B096BFBAA.ogg",
  "class": "AudioResource"
 },
 "id": "audio_FA8F882A_EBA3_4B32_41E4_5F8B096BFBAA",
 "data": {
  "label": "basic education"
 },
 "class": "MediaAudio"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "cli g1",
 "hfovMin": "135%",
 "id": "panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F253BF2D_E3B0_FEAB_41C4_13406056F3DC",
  "this.overlay_F18BD398_E3B0_C66A_41D2_90F188D5B5C9",
  "this.overlay_F1668A29_E391_C6AB_41DD_AAC505CCF9F3",
  "this.overlay_ED948FDA_E3B7_4869_41DA_D9512F0EAEAA",
  "this.overlay_F2085A8F_E3CD_48E8_41BC_9741D96AEE96",
  "this.panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 111.64,
  "class": "PanoramaCameraPosition",
  "pitch": -11.15
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sj od3",
 "hfovMin": "135%",
 "id": "panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130",
 "class": "Panorama",
 "overlays": [
  "this.overlay_EDCB0A2C_E370_C6A9_41EC_243DE68D1625",
  "this.overlay_EDB72823_E377_C25F_41D7_720E8A7ABB0A",
  "this.overlay_ED84658E_E370_4269_41DA_75C54A061420",
  "this.overlay_ED9B17D5_E371_CDFB_41D5_38B0CBF6BF61",
  "this.overlay_F5F6192A_E772_EED9_41BE_09D512265162",
  "this.panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "sj od2",
 "hfovMin": "135%",
 "id": "panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB",
 "class": "Panorama",
 "overlays": [
  "this.overlay_ECCF6894_E370_427A_41E3_6687B1C51384",
  "this.overlay_F343FF7B_E370_5EAF_41B3_154078E582FC",
  "this.overlay_F348545B_E373_C2EE_41EA_FE6DE6D5255A",
  "this.overlay_ECA19FEC_E370_3DAA_41CB_41D478E9B86D",
  "this.overlay_F2A6D35B_E370_C6EF_41EB_DA867E0E0E8C",
  "this.overlay_F362081B_E390_C26F_41A6_E52A09E0BBDD",
  "this.overlay_F233AB3A_E390_46A9_41E7_46F9E34B9F3D",
  "this.overlay_F5B1E33C_E775_E138_41E3_FFAA61ED10C4",
  "this.overlay_F5F4B872_E773_6F49_41E6_063A6D149A39",
  "this.overlay_FB4D6956_EB8D_D093_41DF_73B08DA864A7",
  "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_tcap0",
  "this.overlay_FBB43DAC_EBAF_4536_41E2_3C9D44781BB5",
  "this.overlay_FB1BCD5C_EBAF_4516_41DD_D7C43D669004",
  "this.overlay_FB4CAA03_EBAF_4EF3_41EB_24180B2DE4A1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F692A634_E81E_9379_41D7_20B83BFD553D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96",
   "end": "this.setComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, false, -1, this.effect_294500D7_30F7_DCC3_4181_048D77176BBE, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, true)",
   "camera": "this.panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_8828A8A0_E8FA_9F18_419A_B969AA37C137_playlist, 0, 1); this.keepComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, false); this.setComponentVisibility(this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5, true, -1, this.effect_294510D6_30F7_DCC5_41A1_A09DFD895A63, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A77061C0_E81E_B119_41E9_2BC2300729D6",
   "camera": "this.panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_8828A8A0_E8FA_9F18_419A_B969AA37C137_playlist, 1, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_8828A8A0_E8FA_9F18_419A_B969AA37C137_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "CLI",
 "hfovMin": "135%",
 "id": "panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F2EF9430_E3B1_C2B9_41E4_3BA5467EA372",
  "this.overlay_F2983F28_E3B0_3EA9_4194_66ABBA82D202",
  "this.overlay_F1208464_E3B0_42DA_41E2_380C809DA1E1",
  "this.overlay_F5EB6575_E777_E14B_41D9_AE8BD9FAEC18",
  "this.overlay_F5BC6CE4_E776_E749_41DD_5440E5C70CA4",
  "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_tcap0",
  "this.overlay_FB44F958_EBA7_4D1E_41A1_54A4854EF146"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_FD8A2325_E97B_5754_41D8_D1B73696DB71",
   "x": 3927.4,
   "angle": 0,
   "y": 3136.82,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 141.9,
  "class": "PanoramaCameraPosition",
  "pitch": -0.63
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C85BA560_E825_9119_41E4_1E69324259B3_camera",
 "class": "PanoramaCamera"
},
{
 "id": "effect_294500D7_30F7_DCC3_4181_048D77176BBE",
 "duration": 1000,
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 145.5,
  "class": "PanoramaCameraPosition",
  "pitch": -10.03
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_F980435D_EBA7_3D16_41E6_BC665FDF9341.ogg",
  "class": "AudioResource"
 },
 "id": "audio_F980435D_EBA7_3D16_41E6_BC665FDF9341",
 "data": {
  "label": "cli"
 },
 "class": "MediaAudio"
},
{
 "initialPosition": {
  "yaw": -2.39,
  "class": "PanoramaCameraPosition",
  "pitch": 5.51
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "be 3f3",
 "hfovMin": "135%",
 "id": "panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F33F0193_E7E5_F138_41DC_F78DE34B4B3D",
  "this.panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F1361002_E7FA_8F19_41B6_A21F5639310F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_t.jpg",
 "hfovMax": 130
},
{
 "id": "effect_E48C8795_F108_8AEC_41B0_386A6987464B",
 "duration": 1000,
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": -156.26,
  "class": "PanoramaCameraPosition",
  "pitch": 2.59
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_camera",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_F92B1131_EEFA_04F4_41D9_8C823316B131",
 "left": "0%",
 "children": [
  "this.Image_F92BD131_EEFA_04F4_41E4_FDAA2565E258",
  "this.Container_F92BF131_EEFA_04F4_41D8_9EC3D0CB0CA9",
  "this.IconButton_F92B7131_EEFA_04F4_41ED_95D3D11B0B52"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "height": "12.908%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- MENU"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 643,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "left": 30,
 "width": 573,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
  "this.Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
  "this.Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
  "this.Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": 25,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 116,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "tabsRollOverBackgroundColorRatios": [
  0
 ],
 "id": "TabPanel_F162D482_E795_67C9_41CD_0538B3377AD5",
 "left": "0%",
 "tabsPosition": "top",
 "selectedTabBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "35%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "tabsAlign": "normal",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "selectedTabBackgroundOpacity": 0.91,
 "tabsRollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "tabsFontFamily": "Tahoma",
 "minHeight": 1,
 "propagateClick": false,
 "tabsTextDecoration": "none",
 "tabsFontColor": "#000000",
 "paddingRight": 0,
 "bottom": "8.51%",
 "height": "25.977%",
 "minWidth": 1,
 "pagePaddingBottom": 0,
 "scrollBarWidth": 10,
 "selectedTabBackgroundColorRatios": [
  0
 ],
 "tabsFontWeight": "normal",
 "class": "TabPanel",
 "tabsBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "tabsBackgroundColor": [
  "#FFFFFF"
 ],
 "pages": [
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "backgroundOpacity": 0.1,
   "children": [
    "this.ThumbnailList_F0ED9970_E793_6149_41E6_D857883AD46E"
   ],
   "scrollBarVisible": "rollOver",
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "borderRadius": 0,
   "backgroundColorRatios": [
    0
   ],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 10,
   "paddingRight": 0,
   "backgroundColor": [
    "#FFFFFF"
   ],
   "verticalAlign": "top",
   "minWidth": 20,
   "layout": "absolute",
   "height": "100%",
   "class": "TabPanelPage",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "TabAerial"
   },
   "shadow": false,
   "label": "Aerial View"
  },
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "backgroundOpacity": 0.1,
   "children": [
    "this.ThumbnailList_FFB0FAC9_E7EE_B32B_41D7_14040F3028C3"
   ],
   "scrollBarVisible": "rollOver",
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "borderRadius": 0,
   "backgroundColorRatios": [
    0
   ],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 10,
   "paddingRight": 0,
   "backgroundColor": [
    "#FFFFFF"
   ],
   "verticalAlign": "top",
   "minWidth": 20,
   "layout": "absolute",
   "height": "100%",
   "class": "TabPanelPage",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "TabBasicEdu"
   },
   "shadow": false,
   "label": "Basic Education"
  },
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "backgroundOpacity": 0.1,
   "children": [
    "this.ThumbnailList_AC6E3E45_E86E_9318_41DF_9F94DB64D8CB"
   ],
   "scrollBarVisible": "rollOver",
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "borderRadius": 0,
   "backgroundColorRatios": [
    0
   ],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 10,
   "paddingRight": 0,
   "backgroundColor": [
    "#FFFFFF"
   ],
   "verticalAlign": "top",
   "minWidth": 20,
   "layout": "absolute",
   "height": "100%",
   "class": "TabPanelPage",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "TabJuniorHigh"
   },
   "shadow": false,
   "label": "Junior High"
  },
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "backgroundOpacity": 0.1,
   "children": [
    "this.ThumbnailList_8828A8A0_E8FA_9F18_419A_B969AA37C137"
   ],
   "scrollBarVisible": "rollOver",
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "borderRadius": 0,
   "backgroundColorRatios": [
    0
   ],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 10,
   "paddingRight": 0,
   "backgroundColor": [
    "#FFFFFF"
   ],
   "verticalAlign": "top",
   "minWidth": 20,
   "layout": "absolute",
   "height": "100%",
   "class": "TabPanelPage",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "TabSeniorHigh"
   },
   "shadow": false,
   "label": "Senior High"
  },
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "backgroundOpacity": 0.1,
   "children": [
    "this.ThumbnailList_B50C9E5D_A0AB_CFD4_41DC_5943614E759B"
   ],
   "scrollBarVisible": "rollOver",
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "borderRadius": 0,
   "backgroundColorRatios": [
    0
   ],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 10,
   "paddingRight": 0,
   "backgroundColor": [
    "#FFFFFF"
   ],
   "verticalAlign": "top",
   "minWidth": 20,
   "layout": "absolute",
   "height": "100%",
   "class": "TabPanelPage",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "TabCLI"
   },
   "shadow": false,
   "label": "CLI"
  },
  {
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "backgroundOpacity": 0.1,
   "children": [
    "this.ThumbnailList_B5327F52_A0AB_4D2D_41D7_51D5F5899E68"
   ],
   "scrollBarVisible": "rollOver",
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "borderRadius": 0,
   "backgroundColorRatios": [
    0
   ],
   "propagateClick": false,
   "minHeight": 20,
   "scrollBarWidth": 10,
   "paddingRight": 0,
   "backgroundColor": [
    "#FFFFFF"
   ],
   "verticalAlign": "top",
   "minWidth": 20,
   "layout": "absolute",
   "height": "100%",
   "class": "TabPanelPage",
   "paddingTop": 0,
   "backgroundColorDirection": "vertical",
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "TabFacilities"
   },
   "shadow": false,
   "label": "Facilities"
  }
 ],
 "paddingBottom": 0,
 "pagePaddingLeft": 0,
 "borderSize": 0,
 "tabsFontStyle": "normal",
 "paddingLeft": 0,
 "contentOpaque": false,
 "selectedTabFontWeight": "normal",
 "scrollBarColor": "#000000",
 "pagePaddingRight": 0,
 "data": {
  "name": "--HOTSPOT TAB"
 },
 "tabsFontSize": 12,
 "shadow": false,
 "tabsRollOverFontWeight": "normal",
 "selectedTabFontColor": "#000000",
 "tabsRollOverFontColor": "#000000",
 "tabsBackgroundOpacity": 0.2,
 "pagePaddingTop": 0,
 "tabsSize": 30
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": "2.55%",
 "width": "20.539%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "22.442%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": "22.71%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "--MAP VIEWER"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_CC60BB02_EF1A_0494_41E0_79D7A9D35E57",
 "backgroundOpacity": 0,
 "children": [
  "this.HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39",
  "this.HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD",
  "this.HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC",
  "this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1",
  "this.HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0",
  "this.HTMLText_E5C2B7BC_F10B_8A1C_41D0_02810B92D5A4",
  "this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C",
  "this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9",
  "this.HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5",
  "this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "18%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "28.77%",
 "height": "22.832%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--DESCRIPTION BOX"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SCHOOL INFO"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
 "left": "0%",
 "children": [
  "this.Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--CONTACT"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "borderSize": 0,
 "class": "UIComponent",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "data": {
  "name": "UIComponent2021"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage2022"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "paddingRight": 5,
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "paddingLeft": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton2023"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 178.48,
   "hfov": 4.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.14
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 178.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_0_HS_0_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.14,
   "hfov": 4.61
  }
 ],
 "id": "overlay_F351ECC6_E7E6_9719_41EA_2D38DF30785F",
 "data": {
  "label": "move be3f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F4628946_E7FA_9119_41E0_9E22AAE1BED4_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 43.66,
   "hfov": 4.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.57
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 43.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_0_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.57,
   "hfov": 4.74
  }
 ],
 "id": "overlay_F2604B10_E32A_B0EB_41E9_655DC0319B09",
 "data": {
  "label": "move sj od3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.52,
   "hfov": 4.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.45
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -3.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_1_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.45,
   "hfov": 4.68
  }
 ],
 "id": "overlay_F2B5DF55_E32B_8F15_41EA_CA823B2D1CB3",
 "data": {
  "label": "move sj od2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 31.51,
   "hfov": 5.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.28
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 31.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_2_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.28,
   "hfov": 5.81
  }
 ],
 "id": "overlay_F22B65EC_E32D_933B_41E6_CDC16EA90789",
 "data": {
  "label": "parking lot show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 23.79,
   "hfov": 19.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 16.13
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 23.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_3_0.png",
      "width": 339,
      "class": "ImageResourceLevel",
      "height": 240
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.13,
   "hfov": 19.3
  }
 ],
 "id": "overlay_F3C84C29_E32E_913A_41E4_CC4B1CA87A71",
 "data": {
  "label": "parking lot banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -14.51,
   "hfov": 19.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 17.78
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -14.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_4_0.png",
      "width": 349,
      "class": "ImageResourceLevel",
      "height": 248
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.78,
   "hfov": 19.71
  }
 ],
 "id": "overlay_ED84434C_E370_C6EA_41E5_9689EDD8C108",
 "data": {
  "label": "basic ed & junior high banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -7.81,
   "hfov": 4.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.98
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -7.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_0_HS_5_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.98,
   "hfov": 4.59
  }
 ],
 "id": "overlay_ED84BCFC_E370_43A9_41E2_BF37AC35D1F1",
 "data": {
  "label": "basic ed & junior high show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_EC76AA80_E31D_F1EB_41E5_1E98AF136B72_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -156.63,
   "hfov": 4.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.02
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -156.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_0_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.02,
   "hfov": 4.86
  }
 ],
 "id": "overlay_F7C02E18_E7EB_7328_41E9_E93884DCD8A7",
 "data": {
  "label": "move be2f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -107.55,
   "hfov": 5.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.9
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -107.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_1_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9,
   "hfov": 5.03
  }
 ],
 "id": "overlay_F6DAA94D_E7EB_9128_41B2_D9B169C47A6B",
 "data": {
  "label": "move be2f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.18,
   "hfov": 5.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.53
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -6.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_2_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.53,
   "hfov": 5.26
  }
 ],
 "id": "overlay_F5E73E2D_E7E5_736B_41EA_07FE80FBE5AC",
 "data": {
  "label": "move be3f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 22.17,
   "hfov": 5.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.26
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 22.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_3_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.26,
   "hfov": 5.06
  }
 ],
 "id": "overlay_F48FC60E_E7E5_9326_41DB_C4CDBD71440C",
 "data": {
  "label": "move be1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 28.17,
   "hfov": 13.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.79
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 28.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_4_0.png",
      "width": 238,
      "class": "ImageResourceLevel",
      "height": 169
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.79,
   "hfov": 13.85
  }
 ],
 "id": "overlay_F482361F_E7FB_7327_41EA_F6910BF46715",
 "data": {
  "label": "ground floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_5_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.73,
   "hfov": 14.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.57
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -12.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_0_HS_5_0.png",
      "width": 259,
      "class": "ImageResourceLevel",
      "height": 184
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.57,
   "hfov": 14.81
  }
 ],
 "id": "overlay_F4388694_E7FB_7338_41CD_FFE10E88FAF8",
 "data": {
  "label": "3rd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_EB687831_E7EA_9F7B_41E7_0E0955B95598_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 3.7,
   "hfov": 5.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.89
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 3.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0_HS_0_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.89,
   "hfov": 5.01
  }
 ],
 "id": "overlay_F3D37A38_E7E6_9368_419F_B1C18C52B083",
 "data": {
  "label": "move be2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 10.76,
   "hfov": 16.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 10.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0_HS_1_0.png",
      "width": 278,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.04,
   "hfov": 16.22
  }
 ],
 "id": "overlay_F28B7EE7_E7E7_9318_41E6_637D1173F9D3",
 "data": {
  "label": "2nd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -157.5,
   "hfov": 5.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.45
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -157.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0_HS_2_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 89
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.45,
   "hfov": 5.3
  }
 ],
 "id": "overlay_F3B9F2C9_E7E5_932B_41C1_448A221491F7",
 "data": {
  "label": "move be3f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -108.7,
   "hfov": 4.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.2
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -108.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_0_HS_3_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.2,
   "hfov": 4.4
  }
 ],
 "id": "overlay_F308DC21_E7EA_971B_41A2_566383552898",
 "data": {
  "label": "move be3f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F1361002_E7FA_8F19_41B6_A21F5639310F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 80.39,
   "hfov": 4.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.56
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 80.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82D4E91_E825_9338_41D4_80F12504B135_0_HS_0_0.png",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.56,
   "hfov": 4.62
  }
 ],
 "id": "overlay_C9E9B725_E82A_911B_41DC_B5843D61532D",
 "data": {
  "label": "move jh2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_C82D4E91_E825_9338_41D4_80F12504B135_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.15,
   "hfov": 4.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.92
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -176.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_0_HS_0_0.png",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.92,
   "hfov": 4.61
  }
 ],
 "id": "overlay_BD4A0689_E8EB_B32B_41EA_04270ECBA07C",
 "data": {
  "label": "move sh2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_A665CC93_E81E_B73F_41D7_5EBC6371922E_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -121.75,
   "hfov": 6.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.88
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -121.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D57417BF_E81B_9167_41EC_746462EACC45_0_HS_0_0.png",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.88,
   "hfov": 6.56
  }
 ],
 "id": "overlay_A27C30B8_E82A_8F68_41EB_48CD97210251",
 "data": {
  "label": "move sh1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_D57417BF_E81B_9167_41EC_746462EACC45_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 19.37,
   "hfov": 8.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.74
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 19.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_0_0.png",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 141
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.74,
   "hfov": 8.17
  }
 ],
 "id": "overlay_F3C5B465_E2F8_4C07_41E8_D9FCCAF3F991",
 "data": {
  "label": "move sjd2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -9.94,
   "hfov": 20.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.8
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -9.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_1_0.png",
      "width": 353,
      "class": "ImageResourceLevel",
      "height": 250
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.8,
   "hfov": 20.51
  }
 ],
 "id": "overlay_F4EC95BA_E2E8_CC0D_41E8_E04E56B0F502",
 "data": {
  "label": "basic ed & junior high banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 43.35,
   "hfov": 19.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.91
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 43.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_3_0.png",
      "width": 328,
      "class": "ImageResourceLevel",
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.91,
   "hfov": 19.07
  }
 ],
 "id": "overlay_F49D0307_E328_C403_41D2_F766A3909F34",
 "data": {
  "label": "cli banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -2.44,
   "hfov": 4.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.95
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -2.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_2_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.95,
   "hfov": 4.71
  }
 ],
 "id": "overlay_F5EFB71B_E318_4C03_41E2_6CD37116B805",
 "data": {
  "label": "basic ed & junior high show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 36.25,
   "hfov": 4.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.28
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 36.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_4_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.28,
   "hfov": 4.71
  }
 ],
 "id": "overlay_F4F28C20_E328_FC3D_417C_527577A3C590",
 "data": {
  "label": "cli show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.51,
   "hfov": 5.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.23
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 2.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_5_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.23,
   "hfov": 5.08
  }
 ],
 "id": "overlay_FE811B19_E328_C40F_41D8_CF52259A6CCD",
 "data": {
  "label": "move sjod2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 29.46,
   "hfov": 4.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.05
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 29.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_7_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 89
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.05,
   "hfov": 4.34
  }
 ],
 "id": "overlay_FC60614D_E329_C407_41E1_81A90E062876",
 "data": {
  "label": "move sjod1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 31.43,
   "hfov": 5.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.47
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 31.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_6_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.47,
   "hfov": 5.03
  }
 ],
 "id": "overlay_FDA9B94B_E329_C403_41E3_BDFF535E4741",
 "data": {
  "label": "move sjod3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_8_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 41.05,
   "hfov": 14.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.86
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 41.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_8_0.png",
      "width": 250,
      "class": "ImageResourceLevel",
      "height": 177
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.86,
   "hfov": 14.43
  }
 ],
 "id": "overlay_FF67EC78_E477_C828_41E1_239DBCF6D96C",
 "data": {
  "label": "parking lot banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 35.38,
   "hfov": 4.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.09
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 35.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_9_0.png",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.09,
   "hfov": 4.33
  }
 ],
 "id": "overlay_FF5C4B99_E47D_48EB_41E1_A95B178BD287",
 "data": {
  "label": "parking lot show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 49.2,
   "hfov": 5.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.79
  }
 ],
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_E4C689F0_EBA3_4D2E_41C5_F77B87666876)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 49.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEF4EF9B_E2E8_5C03_41D6_2C24E1A51C84_0_HS_15_0.png",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.79,
   "hfov": 5.21
  }
 ],
 "id": "overlay_E7557FB1_E994_903B_41E5_52713A0CFEAA",
 "data": {
  "label": "intro audio"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_F92B7131_EEFA_04F4_41ED_95D3D11B0B52",
 "backgroundOpacity": 0,
 "width": 49,
 "right": 30,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_F92B7131_EEFA_04F4_41ED_95D3D11B0B52_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": 8,
 "height": 37,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_F92B7131_EEFA_04F4_41ED_95D3D11B0B52.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -104.37,
   "hfov": 4.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.19
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -104.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_0_HS_0_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 81
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.19,
   "hfov": 4.82
  }
 ],
 "id": "overlay_CF51A9F1_E81F_B0FB_41D2_373FFE10AC1A",
 "data": {
  "label": "move jh3f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_CEBAD7BC_E81A_9168_41E2_C400CA5A68A5_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -24,
   "hfov": 6.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.68
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_0_HS_0_0.png",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.68,
   "hfov": 6.27
  }
 ],
 "id": "overlay_A57CEEED_E82A_90EB_41EB_C5CB57763889",
 "data": {
  "label": "move sh1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_D5744B21_E81B_F11B_418D_15C0FC3A3D5E_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -90.14,
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.5
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -90.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_0_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5,
   "hfov": 5.41
  }
 ],
 "id": "overlay_FA093707_E93A_7F2B_41E0_7552B7269F94",
 "data": {
  "label": "move be1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 96.18,
   "hfov": 6.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.23
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 96.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_1_0.png",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23,
   "hfov": 6.2
  }
 ],
 "id": "overlay_FAB0736A_E93A_37E5_41C5_BE33D28E97B1",
 "data": {
  "label": "move jh1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -97.72,
   "hfov": 18.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.47
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -97.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_2_0.png",
      "width": 307,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.47,
   "hfov": 18.18
  }
 ],
 "id": "overlay_FDF9F01B_E93E_D15B_41D1_BBABD4ADF8A9",
 "data": {
  "label": "basic ed banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 88.7,
   "hfov": 17.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.83
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 88.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_3_0.png",
      "width": 299,
      "class": "ImageResourceLevel",
      "height": 212
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.83,
   "hfov": 17.73
  }
 ],
 "id": "overlay_FDE54E94_E93E_312E_41D6_A6177E3C021D",
 "data": {
  "label": "junior high banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -24.88,
   "hfov": 4.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.15
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -24.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_4_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.15,
   "hfov": 4.08
  }
 ],
 "id": "overlay_FE261DA0_E92A_D365_41E1_50F50260F4BE",
 "data": {
  "label": "move sjod8"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 36.09,
   "hfov": 3.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.15
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 36.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_5_0.png",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.15,
   "hfov": 3.97
  }
 ],
 "id": "overlay_FE5BF8BB_E92E_515B_41E6_2ECB9F59A8E6",
 "data": {
  "label": "move sjod9"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_6_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -29.92,
   "hfov": 11.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.1
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -29.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_6_0.png",
      "width": 197,
      "class": "ImageResourceLevel",
      "height": 139
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.1,
   "hfov": 11.66
  }
 ],
 "id": "overlay_F3200A96_E95A_512D_41D7_E027AE227F1F",
 "data": {
  "label": "stage banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_7_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 31.51,
   "hfov": 11.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.84
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 31.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_0_HS_7_0.png",
      "width": 186,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.84,
   "hfov": 11.06
  }
 ],
 "id": "overlay_F05EFB2C_E95A_777D_41E2_E2AB506FF944",
 "data": {
  "label": "cafeteria banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E46E0E13_E92E_512B_41E7_808D1FF14891_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -138.48,
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.2
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -138.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0_HS_0_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "hfov": 4.38
  }
 ],
 "id": "overlay_F256FFFC_E957_CEDD_41C7_DC3F70818996",
 "data": {
  "label": "move sjod7"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -158.12,
   "hfov": 4.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.68
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -158.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0_HS_1_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.68,
   "hfov": 4.62
  }
 ],
 "id": "overlay_F51ABF09_E956_CF26_41E6_C4CE470FB9B7",
 "data": {
  "label": "move sjod10"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.37,
   "hfov": 5.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.07
  }
 ],
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 53, this.audio_FB36A55D_EBAF_C516_41C5_BE9A6A5824C5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -6.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0726AA6_E92A_316D_41D8_925BDCE368F4_0_HS_2_0.png",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 96
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.07,
   "hfov": 5.67
  }
 ],
 "id": "overlay_E4654A55_EBAF_4F16_41D3_AE64ACF59046",
 "data": {
  "label": "stage audio"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -73.85,
   "hfov": 4.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.58
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -73.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0_HS_0_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.58,
   "hfov": 4.72
  }
 ],
 "id": "overlay_F56D4233_E96B_F16B_41BC_03662C9E0F16",
 "data": {
  "label": "move sjod8"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -80.57,
   "hfov": 14.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.48
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -80.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0_HS_1_0.png",
      "width": 253,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.48,
   "hfov": 14.93
  }
 ],
 "id": "overlay_F517933D_E96A_D75F_41BA_1535B3A451A4",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 72.52,
   "hfov": 15.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.31
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 72.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0_HS_2_0.png",
      "width": 266,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.31,
   "hfov": 15.73
  }
 ],
 "id": "overlay_F532572C_E96E_DF7E_41E4_0ED928BB6327",
 "data": {
  "label": "cafeteria banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 78.63,
   "hfov": 4.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.59
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 78.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0_HS_3_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.59,
   "hfov": 4.76
  }
 ],
 "id": "overlay_F58A5E69_E96E_71E7_41E5_F3F2251EC924",
 "data": {
  "label": "move sjod9"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.42,
   "hfov": 4.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.36
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 179.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_0_HS_4_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.36,
   "hfov": 4.9
  }
 ],
 "id": "overlay_FAEEE8F8_EB8C_B19F_41E9_4911FBEB124F",
 "data": {
  "label": "move sjod11"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F289051C_E96A_535D_41B7_9177F6FFFD17_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 85.31,
   "hfov": 4.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.97
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 85.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0_HS_0_0.png",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.97,
   "hfov": 4.19
  }
 ],
 "id": "overlay_F19A2762_E3B0_4ED9_41D3_A82D37E1CC62",
 "data": {
  "label": "move clig1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_1_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 143.99,
   "hfov": 25.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 16.97
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 143.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_1_HS_1_0.png",
      "width": 453,
      "class": "ImageResourceLevel",
      "height": 321
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.97,
   "hfov": 25.66
  }
 ],
 "id": "overlay_F1CB7EAB_E3B0_5FAF_41E6_67C531A1035E",
 "data": {
  "label": "business office banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_1_HS_2_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 154.61,
   "hfov": 6.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.15
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 154.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_1_HS_2_0.png",
      "width": 107,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.15,
   "hfov": 6.24
  }
 ],
 "id": "overlay_F1B51493_E3B0_C27F_41C6_3ACDB7E7199F",
 "data": {
  "label": "business office show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -108.13,
   "hfov": 14.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.58
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -108.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0_HS_3_0.png",
      "width": 244,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.58,
   "hfov": 14.45
  }
 ],
 "id": "overlay_F0911C0C_E3D3_4FE8_41D0_919592F8E3F4",
 "data": {
  "label": "2nd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -102.11,
   "hfov": 4.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.74
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -102.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_0_HS_4_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.74,
   "hfov": 4.77
  }
 ],
 "id": "overlay_F0E55FBE_E3D2_C829_41DB_EFA88EBFBAD1",
 "data": {
  "label": "move cli2f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F24DB94C_E3B1_C2E9_4185_85464E48B721_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -64.18,
   "hfov": 6.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.83
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -64.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0_HS_0_0.png",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.83,
   "hfov": 6.27
  }
 ],
 "id": "overlay_F123A4E3_E390_C3DF_41E0_8322E3461393",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 107.04,
   "hfov": 7.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.81
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 107.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_1_HS_1_0.png",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 125
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.81,
   "hfov": 7.45
  }
 ],
 "id": "overlay_F600E6E9_E390_4FAB_41EB_216C922882C6",
 "data": {
  "label": "library show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_1_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 97.71,
   "hfov": 26.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.12
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 97.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_1_HS_2_0.png",
      "width": 444,
      "class": "ImageResourceLevel",
      "height": 315
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.12,
   "hfov": 26.23
  }
 ],
 "id": "overlay_F6DF3378_E390_46AA_41E6_8D3805487A37",
 "data": {
  "label": "library banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 117.92,
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.87
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 117.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_0_HS_3_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.87,
   "hfov": 5.41
  }
 ],
 "id": "overlay_F17C80E8_E390_43A9_41E6_A779310396A3",
 "data": {
  "label": "move clig4"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F008C65A_E390_CEE9_41D1_D61996B0C4EB_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 171.49,
   "hfov": 5.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.82
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 171.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F791628E_E7EE_9328_41EB_988EBF482C48_0_HS_0_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.82,
   "hfov": 5.2
  }
 ],
 "id": "overlay_F673A956_E7E5_7139_41E2_CB3EBDD1648B",
 "data": {
  "label": "move be2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F791628E_E7EE_9328_41EB_988EBF482C48_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -131.1,
   "hfov": 12.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.57
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -131.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_1_HS_0_0.png",
      "width": 207,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.57,
   "hfov": 12.28
  }
 ],
 "id": "overlay_F71D87F6_E825_70F8_41E0_9C00FB2C0D6D",
 "data": {
  "label": "move sjod2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0_HS_1_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -51.77,
   "hfov": 5.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.52
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -51.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0_HS_1_0.png",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.52,
   "hfov": 5.77
  }
 ],
 "id": "overlay_CBF4D194_E82E_9138_41EB_01867C860FBC",
 "data": {
  "label": "move jh2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -45.73,
   "hfov": 14.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.77
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -45.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0_HS_2_0.png",
      "width": 254,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.77,
   "hfov": 14.77
  }
 ],
 "id": "overlay_CD43D9E7_E82D_90E7_41E8_C80F55ED6668",
 "data": {
  "label": "2nd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 13.17,
   "hfov": 4.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.19
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 13.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0_HS_3_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.19,
   "hfov": 4.65
  }
 ],
 "id": "overlay_B01930E0_E8EF_8F19_41B8_0F3DB5F30354",
 "data": {
  "label": "move sh2f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -76.35,
   "hfov": 5.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.54
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -76.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F692A634_E81E_9379_41D7_20B83BFD553D_0_HS_4_0.png",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.54,
   "hfov": 5.36
  }
 ],
 "id": "overlay_FF97D0D4_E936_D12D_41EC_3412F129B73F",
 "data": {
  "label": "move sjod7"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F692A634_E81E_9379_41D7_20B83BFD553D_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 189.16,
  "x": 1588.65,
  "height": 189.13,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2962.03
 },
 "image": {
  "x": 1587.9,
  "y": 2960.95,
  "class": "HotspotMapOverlayImage",
  "width": 189.16,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_0.png",
     "width": 115,
     "class": "ImageResourceLevel",
     "height": 115
    }
   ],
   "class": "ImageResource"
  },
  "height": 189.13
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_FB47FF85_E98B_AF54_41B6_AB21CE7406CC",
 "data": {
  "label": "Junior High"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 189.16,
  "x": 331.79,
  "height": 189.13,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2906.42
 },
 "image": {
  "x": 330.82,
  "y": 2905.51,
  "class": "HotspotMapOverlayImage",
  "width": 189.16,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_1.png",
     "width": 115,
     "class": "ImageResourceLevel",
     "height": 115
    }
   ],
   "class": "ImageResource"
  },
  "height": 189.13
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_FAA9729C_E98B_517B_41D8_35ED923611C5",
 "data": {
  "label": "Basic Education"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 189.16,
  "x": 3833.57,
  "height": 189.13,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 3043.05
 },
 "image": {
  "x": 3832.82,
  "y": 3042.25,
  "class": "HotspotMapOverlayImage",
  "width": 189.16,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_2.png",
     "width": 115,
     "class": "ImageResourceLevel",
     "height": 115
    }
   ],
   "class": "ImageResource"
  },
  "height": 189.13
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_FA053D73_E98A_B3CC_41E7_8F7D21DE0291",
 "data": {
  "label": "CLI"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 189.16,
  "x": 3121.67,
  "height": 189.13,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 2388.67
 },
 "image": {
  "x": 3120.96,
  "y": 2387.79,
  "class": "HotspotMapOverlayImage",
  "width": 189.16,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_3.png",
     "width": 115,
     "class": "ImageResourceLevel",
     "height": 115
    }
   ],
   "class": "ImageResource"
  },
  "height": 189.13
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_FB3CD55A_E98A_D3FC_41C2_C0D40B66E358",
 "data": {
  "label": "CLI Library"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 189.16,
  "x": 1483.16,
  "height": 189.13,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 1600.55
 },
 "image": {
  "x": 1482.24,
  "y": 1599.66,
  "class": "HotspotMapOverlayImage",
  "width": 189.16,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_4.png",
     "width": 115,
     "class": "ImageResourceLevel",
     "height": 115
    }
   ],
   "class": "ImageResource"
  },
  "height": 189.13
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_FA8E471E_E98D_7F75_41E8_1396F8F033B8",
 "data": {
  "label": "Senior High"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 189.16,
  "x": 2943.95,
  "height": 189.13,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 941.53
 },
 "image": {
  "x": 2942.92,
  "y": 940.58,
  "class": "HotspotMapOverlayImage",
  "width": 189.16,
  "image": {
   "levels": [
    {
     "url": "media/map_FD8A2325_E97B_5754_41D8_D1B73696DB71_HS_5.png",
     "width": 115,
     "class": "ImageResourceLevel",
     "height": 115
    }
   ],
   "class": "ImageResource"
  },
  "height": 189.13
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_FA3C43B1_E98D_D74C_417A_7D148B722DDB",
 "data": {
  "label": "Sports Field"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 120.63,
   "hfov": 5.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.09
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 120.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0_HS_0_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.09,
   "hfov": 5.87
  }
 ],
 "id": "overlay_FA9CE522_E3BD_59D8_41E2_0034C8EE7DDF",
 "data": {
  "label": "move cli4f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -84.07,
   "hfov": 4.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.18
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -84.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0_HS_1_0.png",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.18,
   "hfov": 4.26
  }
 ],
 "id": "overlay_FA589AC0_E3BE_C859_41EB_3AD8151B366C",
 "data": {
  "label": "move cli4f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -78.31,
   "hfov": 12.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.27
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -78.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0_HS_2_0.png",
      "width": 219,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.27,
   "hfov": 12.98
  }
 ],
 "id": "overlay_F9C6EA05_E3BE_CBDB_41E3_CB8034AA60E2",
 "data": {
  "label": "4th floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 113.57,
   "hfov": 16.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.58
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 113.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_0_HS_3_0.png",
      "width": 274,
      "class": "ImageResourceLevel",
      "height": 194
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.58,
   "hfov": 16.24
  }
 ],
 "id": "overlay_F9A1FEF2_E3BD_4839_41C2_9312E3561801",
 "data": {
  "label": "4th floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F9C58B39_E3BD_482B_41BF_79484BA04A2D_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -86.62,
   "hfov": 4.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.58
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -86.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0_HS_0_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.58,
   "hfov": 4.98
  }
 ],
 "id": "overlay_F6AAE916_E3F5_49F9_41E9_5CFB6008DAC3",
 "data": {
  "label": "move cli3f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 91.88,
   "hfov": 4.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.04
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 91.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_0_HS_1_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.04,
   "hfov": 4.92
  }
 ],
 "id": "overlay_F6A1471F_E3F5_59E8_41D7_DCD8E90D391C",
 "data": {
  "label": "move cli3f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F06132F0_E3F7_F838_41D7_17B8B9ADA87B_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 97.25,
   "hfov": 5.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.43
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 97.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0_HS_0_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.43,
   "hfov": 5.65
  }
 ],
 "id": "overlay_B9C34911_E81B_9138_41D9_74EA6446DF02",
 "data": {
  "label": "move sh1f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 90.27,
   "hfov": 17.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.33
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 90.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0_HS_1_0.png",
      "width": 289,
      "class": "ImageResourceLevel",
      "height": 205
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.33,
   "hfov": 17.13
  }
 ],
 "id": "overlay_BB0D2FFD_E8E6_90E8_41CD_94682A45EE6A",
 "data": {
  "label": "groundfloor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -99.82,
   "hfov": 4.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.7
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -99.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0_HS_2_0.png",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.7,
   "hfov": 4.37
  }
 ],
 "id": "overlay_BE33D56C_E8E5_B1E8_41E9_EAE928A6951F",
 "data": {
  "label": "move sh2f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 169.59,
   "hfov": 4.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.56
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 169.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_0_HS_3_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.56,
   "hfov": 4.88
  }
 ],
 "id": "overlay_BFFCAD9A_E8EA_F129_41D2_C22EE7E1BE1C",
 "data": {
  "label": "move sh2f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_A77061C0_E81E_B119_41E9_2BC2300729D6_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.07,
   "hfov": 5.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.59
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 1.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0_HS_0_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.59,
   "hfov": 5.02
  }
 ],
 "id": "overlay_F8A7B819_EB83_B09E_41CF_B7C980164BF6",
 "data": {
  "label": "move sjod2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.77,
   "hfov": 4.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.21
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 179.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_0_HS_1_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.21,
   "hfov": 4.87
  }
 ],
 "id": "overlay_FFB085E0_EB84_73AF_41E6_27E23434FEE4",
 "data": {
  "label": "move sjod10"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E64055B0_EB8C_B3AE_41E8_071AAD2759D3_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 11.05,
   "hfov": 4.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.32
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 11.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0_HS_0_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32,
   "hfov": 4.67
  }
 ],
 "id": "overlay_F4BF6660_E96A_31E5_41DE_FE629A5E770E",
 "data": {
  "label": "move sjod10"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 91.95,
   "hfov": 4.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.62
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 91.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0_HS_1_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.62,
   "hfov": 4.77
  }
 ],
 "id": "overlay_C8E5754B_E976_333B_41E1_A697EF96EBB4",
 "data": {
  "label": "move sh1f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 85.44,
   "hfov": 15.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.24
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 85.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0_HS_2_0.png",
      "width": 267,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.24,
   "hfov": 15.79
  }
 ],
 "id": "overlay_C885D3D5_E976_372F_41E1_F9DC434B9C98",
 "data": {
  "label": "senior high banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -93.49,
   "hfov": 3.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.02
  }
 ],
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 54, this.audio_FABCAB97_EBA0_CD12_41E0_461E791C59B6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -93.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0_HS_3_0.png",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.02,
   "hfov": 3.8
  }
 ],
 "id": "overlay_FB8AE1CD_EBA1_DD76_41CB_EAE317126E4A",
 "data": {
  "label": "audio cafeteria"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -62.55,
   "hfov": 4.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.04
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -62.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0FD2C45_E92A_D12F_41E8_2295FA4E18B7_0_HS_4_0.png",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.04,
   "hfov": 4.16
  }
 ],
 "id": "overlay_8B8C1C28_9807_A320_41D3_0ABFAF333C0A",
 "data": {
  "label": "move sjod10"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.45,
   "hfov": 9.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.17
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -12.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_0_0.png",
      "width": 155,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.17,
   "hfov": 9.19
  }
 ],
 "id": "overlay_F0E587C8_E3DD_3868_41D5_A3E2DD90C018",
 "data": {
  "label": "roof garden show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.09,
   "hfov": 9.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.17
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -177.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_1_0.png",
      "width": 155,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.17,
   "hfov": 9.19
  }
 ],
 "id": "overlay_F10818E1_E3D3_4858_41E2_B286533BF9D1",
 "data": {
  "label": "open area show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -21.64,
   "hfov": 24.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.48
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -21.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_2_0.png",
      "width": 417,
      "class": "ImageResourceLevel",
      "height": 295
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.48,
   "hfov": 24.45
  }
 ],
 "id": "overlay_F1754707_E3D3_D9E7_41E2_EE0A5B13D2B9",
 "data": {
  "label": "roof garden banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -166.83,
   "hfov": 26.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.8
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -166.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_3_0.png",
      "width": 450,
      "class": "ImageResourceLevel",
      "height": 319
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.8,
   "hfov": 26.37
  }
 ],
 "id": "overlay_F0964D36_E3D3_4838_41D2_142DE7112B01",
 "data": {
  "label": "open area banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 89.2,
   "hfov": 4.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.45
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 89.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_4_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 81
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.45,
   "hfov": 4.81
  }
 ],
 "id": "overlay_F107DCF3_E3D6_C83F_41E4_673FFD688AB2",
 "data": {
  "label": "move cli2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -90.84,
   "hfov": 4.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.25
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -90.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_0_HS_5_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 81
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.25,
   "hfov": 4.84
  }
 ],
 "id": "overlay_F0FB8146_E3D7_5858_41D5_16B856317775",
 "data": {
  "label": "move cli2f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F0EDCB8A_E3D3_48E8_41E5_5E7B77598184_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0_HS_0_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -8.92,
   "hfov": 5.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.51
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -8.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0_HS_0_0.png",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.51,
   "hfov": 5.52
  }
 ],
 "id": "overlay_F73014BA_E3FD_F828_41DA_72D026C63FE6",
 "data": {
  "label": "move cli2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -82.91,
   "hfov": 4.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.39
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -82.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0_HS_1_0.png",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.39,
   "hfov": 4.29
  }
 ],
 "id": "overlay_F6C79729_E3F3_3828_41EA_8457891B4885",
 "data": {
  "label": "move cli3f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -16.27,
   "hfov": 16.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.82
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -16.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0_HS_2_0.png",
      "width": 287,
      "class": "ImageResourceLevel",
      "height": 204
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.82,
   "hfov": 16.55
  }
 ],
 "id": "overlay_F5EC6F93_E3F5_48F8_41E3_2BBBB1FE2E4F",
 "data": {
  "label": "2nd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 20.17,
   "hfov": 5.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.5
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 20.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0_HS_3_0.png",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.5,
   "hfov": 5.56
  }
 ],
 "id": "overlay_F4AEEDA9_E3D2_C828_41D6_44C1054C50FE",
 "data": {
  "label": "move cli4f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 12.9,
   "hfov": 16.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 20.03
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 12.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_0_HS_4_0.png",
      "width": 290,
      "class": "ImageResourceLevel",
      "height": 205
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.03,
   "hfov": 16.16
  }
 ],
 "id": "overlay_F4F6E660_E3CD_5858_41E3_6BA773210C61",
 "data": {
  "label": "4th floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F6B199EF_E3F7_C827_41CC_A2672CA40D33_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -2.85,
   "hfov": 8.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.13
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -2.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_0_0.png",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 141
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.13,
   "hfov": 8.22
  }
 ],
 "id": "overlay_F128D436_E2F9_CC05_41C8_B0673654A50A",
 "data": {
  "label": "move sjd2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -35.35,
   "hfov": 18.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.69
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -35.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_1_0.png",
      "width": 322,
      "class": "ImageResourceLevel",
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.69,
   "hfov": 18.88
  }
 ],
 "id": "overlay_F9494BFB_E338_C403_41EA_0FC8A3680747",
 "data": {
  "label": "cli banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -28.42,
   "hfov": 4.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.53
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -28.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_2_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.53,
   "hfov": 4.66
  }
 ],
 "id": "overlay_F98AC33E_E338_4405_41D7_F678E1C242B1",
 "data": {
  "label": "cli show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 46.03,
   "hfov": 15.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.56
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 46.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_3_0.png",
      "width": 265,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.56,
   "hfov": 15.23
  }
 ],
 "id": "overlay_F99CB6B7_E339_CC03_41C8_7EE07D7FD8D0",
 "data": {
  "label": "senior high banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 40.43,
   "hfov": 4.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.12
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 40.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_4_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.12,
   "hfov": 4.55
  }
 ],
 "id": "overlay_F9804D45_E338_5C07_4167_897C81F8E0E8",
 "data": {
  "label": "senior high show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_5_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 30.29,
   "hfov": 20.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.53
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 30.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_5_0.png",
      "width": 353,
      "class": "ImageResourceLevel",
      "height": 250
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.53,
   "hfov": 20.66
  }
 ],
 "id": "overlay_F981C74E_E338_CC05_41D9_83D63C243ED6",
 "data": {
  "label": "basic ed & junior high banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 30.05,
   "hfov": 4.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.96
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 30.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_6_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.96,
   "hfov": 4.71
  }
 ],
 "id": "overlay_F94B5AC4_E338_C405_41A1_17015B458B23",
 "data": {
  "label": "basic ed & junior high show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -139.83,
   "hfov": 7.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -48.45
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -139.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_7_0.png",
      "width": 191,
      "class": "ImageResourceLevel",
      "height": 191
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.45,
   "hfov": 7.46
  }
 ],
 "id": "overlay_F71ADB70_E6F7_BDFE_41E6_29EFBB38E829",
 "data": {
  "label": "move sjod5"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 25.08,
   "hfov": 6.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.98
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 25.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C4FEC5_E2E8_5C07_41E4_D390191C384B_0_HS_8_0.png",
      "width": 163,
      "class": "ImageResourceLevel",
      "height": 163
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.98,
   "hfov": 6.9
  }
 ],
 "id": "overlay_D4A3417F_E866_B1E8_41CF_69FC95FFA545",
 "data": {
  "label": "move sjod6"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -84.89,
   "hfov": 4.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.48
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -84.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0_HS_0_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.48,
   "hfov": 4.42
  }
 ],
 "id": "overlay_F0927EA6_E3D6_C8D8_41E9_2B181C9D17F4",
 "data": {
  "label": "move cli2f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -150.29,
   "hfov": 18.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.92
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -150.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0_HS_1_0.png",
      "width": 332,
      "class": "ImageResourceLevel",
      "height": 235
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.92,
   "hfov": 18.72
  }
 ],
 "id": "overlay_F1354F85_E3D5_48DB_41E6_FDF4EB29019C",
 "data": {
  "label": "ground floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -158.79,
   "hfov": 5.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.81
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -158.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0_HS_2_0.png",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.81,
   "hfov": 5.8
  }
 ],
 "id": "overlay_F0CADED8_E3D5_C86A_41D8_025ECB0AF90B",
 "data": {
  "label": "move clig1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 175.41,
   "hfov": 5.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.64
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 175.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0_HS_3_0.png",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.64,
   "hfov": 5.64
  }
 ],
 "id": "overlay_F7CA5F53_E3F5_487F_41E3_8E158F88930B",
 "data": {
  "label": "move cli3f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 168.17,
   "hfov": 17.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 16.33
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 168.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_0_HS_4_0.png",
      "width": 300,
      "class": "ImageResourceLevel",
      "height": 213
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.33,
   "hfov": 17.1
  }
 ],
 "id": "overlay_F724DD63_E3F3_485F_41E7_8B883389B2A5",
 "data": {
  "label": "3rd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F261444A_E3D3_7868_41E0_7CEF2D3F4371_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0_HS_0_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -170.35,
   "hfov": 5.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.87
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -170.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0_HS_0_0.png",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.87,
   "hfov": 5.7
  }
 ],
 "id": "overlay_FA54998A_E3CD_48E9_41E8_6395D285E526",
 "data": {
  "label": "move cli3f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -162.72,
   "hfov": 18.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.59
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -162.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0_HS_1_0.png",
      "width": 321,
      "class": "ImageResourceLevel",
      "height": 228
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.59,
   "hfov": 18.17
  }
 ],
 "id": "overlay_FB66DA75_E3CF_C838_41E1_DE369B642A32",
 "data": {
  "label": "3rd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 94.82,
   "hfov": 4.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.53
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 94.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0_HS_2_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.53,
   "hfov": 4.06
  }
 ],
 "id": "overlay_FAC4FE8E_E3CD_C8E9_41EA_3319D66DFBB8",
 "data": {
  "label": "move cli4f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -134.81,
   "hfov": 17.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 20.14
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -134.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0_HS_3_0.png",
      "width": 311,
      "class": "ImageResourceLevel",
      "height": 221
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.14,
   "hfov": 17.34
  }
 ],
 "id": "overlay_FA2FBFAF_E3B6_C827_41EC_11B45E1C318C",
 "data": {
  "label": "rooftop banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -142.89,
   "hfov": 5.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.58
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -142.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_0_HS_4_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.58,
   "hfov": 5.65
  }
 ],
 "id": "overlay_FA2F6DF1_E3B6_C83B_41D3_BB6B954D979B",
 "data": {
  "label": "move rtf1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_FBC68AE0_E3D5_4859_41E2_C68285260B81_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 84.84,
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.05
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 84.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_0_HS_0_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.05,
   "hfov": 4.78
  }
 ],
 "id": "overlay_F3848453_E79D_A74E_41E9_F26B84F9FBDD",
 "data": {
  "label": "move be1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F0B657C2_E79F_A149_41CC_A5A452A521A8_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0_HS_0_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.55,
   "hfov": 5.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.4
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -177.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_0_HS_0_0.png",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.4,
   "hfov": 5.84
  }
 ],
 "id": "overlay_F6FB1A28_E7EA_9368_41E8_C76D01C18FB8",
 "data": {
  "label": "move be2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_EBDE1157_E7EA_F138_41E6_C54DCE1030C9_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 122.65,
   "hfov": 6.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.5
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 122.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_0_HS_0_0.png",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.5,
   "hfov": 6.26
  }
 ],
 "id": "overlay_A09C7BDE_E82B_9129_41CB_2C8128E7850B",
 "data": {
  "label": "move sh1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_D50761D3_E81B_F13F_41E2_A3431B7F3EE5_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -158.08,
   "hfov": 5.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.6
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -158.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0_HS_0_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 89
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.6,
   "hfov": 5.09
  }
 ],
 "id": "overlay_D905B40B_E865_7728_41D8_6A7E4FD9ABF5",
 "data": {
  "label": "move jh3f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -164.09,
   "hfov": 14.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -164.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0_HS_1_0.png",
      "width": 243,
      "class": "ImageResourceLevel",
      "height": 172
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.4,
   "hfov": 14.03
  }
 ],
 "id": "overlay_DDA1DAB1_E865_7378_41E9_4708C01C3890",
 "data": {
  "label": "3rd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -44.94,
   "hfov": 5.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.04
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -44.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0_HS_2_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.04,
   "hfov": 5.67
  }
 ],
 "id": "overlay_DC2488ED_E87B_90E8_41D5_A32EE30E15E2",
 "data": {
  "label": "move 4f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -1.92,
   "hfov": 5.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.01
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -1.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_0_HS_3_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.01,
   "hfov": 5.23
  }
 ],
 "id": "overlay_DD31B476_E87B_97F9_41DA_377BCB211561",
 "data": {
  "label": "move 4f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_C6DAEC85_E86F_9718_41D9_94E028D33568_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -93.69,
   "hfov": 7.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.05
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -93.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0_HS_0_0.png",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 122
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.05,
   "hfov": 7.14
  }
 ],
 "id": "overlay_F7DF305C_E6ED_CB25_41C8_DCAAFB04060F",
 "data": {
  "label": "basketball court show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.04,
   "hfov": 6.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.09
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 2.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0_HS_1_0.png",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.09,
   "hfov": 6.61
  }
 ],
 "id": "overlay_F73021E1_E6EC_4D1F_41D1_C18315211755",
 "data": {
  "label": "volleyball court show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.76,
   "hfov": 21.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.61
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -6.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0_HS_2_0.png",
      "width": 366,
      "class": "ImageResourceLevel",
      "height": 259
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.61,
   "hfov": 21.15
  }
 ],
 "id": "overlay_F7AF0244_E6EC_CF26_41C9_D858BCF8DE4A",
 "data": {
  "label": "volleyball court banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -83.75,
   "hfov": 23.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 16.21
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -83.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0_HS_3_0.png",
      "width": 421,
      "class": "ImageResourceLevel",
      "height": 298
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.21,
   "hfov": 23.94
  }
 ],
 "id": "overlay_F7D72D6B_E6F3_B5E2_41E4_3366CAE0A7EA",
 "data": {
  "label": "basketball court banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -25.66,
   "hfov": 4.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.03
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -25.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_0_HS_4_0.png",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.03,
   "hfov": 4.15
  }
 ],
 "id": "overlay_F747B77F_E777_A137_41E1_01BCC796A546",
 "data": {
  "label": "move sjod6"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F68B4905_E6D7_DD27_4181_F6819C10AC07_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -88.62,
   "hfov": 4.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.95
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -88.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_0_0.png",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.95,
   "hfov": 4.29
  }
 ],
 "id": "overlay_AB31A2D3_E825_F33F_41CF_5EF5F2B0FE04",
 "data": {
  "label": "move sjod6"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 31.78,
   "hfov": 7.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.25
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 31.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_1_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.25,
   "hfov": 7.01
  }
 ],
 "id": "overlay_A350B3C5_E82F_911B_41D2_8FCE5D26A124",
 "data": {
  "label": "move sh1f3R"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -64.37,
   "hfov": 6.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.48
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -64.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_2_0.png",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.48,
   "hfov": 6.6
  }
 ],
 "id": "overlay_A4CED88D_E82D_9F28_41DE_3C68108D4134",
 "data": {
  "label": "move sh1f7R"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -146.27,
   "hfov": 18.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -146.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_3_0.png",
      "width": 313,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.4,
   "hfov": 18.55
  }
 ],
 "id": "overlay_A7FF3C09_E81E_972B_41E8_5D1417325E5D",
 "data": {
  "label": "2nd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -138.29,
   "hfov": 6.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.66
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -138.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_4_0.png",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.66,
   "hfov": 6.28
  }
 ],
 "id": "overlay_A75552A2_E81D_9319_41E9_C87E881B630B",
 "data": {
  "label": "move sh2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.67,
   "hfov": 4.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.63
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 0.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_5_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63,
   "hfov": 4.74
  }
 ],
 "id": "overlay_C98D0F24_E976_4F6D_41E5_D580E0EA002F",
 "data": {
  "label": "move sjod9"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_6_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -4.26,
   "hfov": 12.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.51
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -4.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_0_HS_6_0.png",
      "width": 218,
      "class": "ImageResourceLevel",
      "height": 154
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.51,
   "hfov": 12.91
  }
 ],
 "id": "overlay_C8D631B4_E97A_D36D_41E5_CCC5F873FFED",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 87.27,
   "hfov": 4.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.41
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 87.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C85BA560_E825_9119_41E4_1E69324259B3_0_HS_0_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.41,
   "hfov": 4.77
  }
 ],
 "id": "overlay_CA7C3A29_E82D_9368_41DE_EA2DFC04DF27",
 "data": {
  "label": "move jh2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_C85BA560_E825_9119_41E4_1E69324259B3_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 19.03,
   "hfov": 8.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.44
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 19.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_0_0.png",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 141
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.44,
   "hfov": 8.24
  }
 ],
 "id": "overlay_F36F264A_E2FF_CC0D_41E8_614251285653",
 "data": {
  "label": "move sjd3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -120.6,
   "hfov": 8.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.96
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -120.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_1_0.png",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 141
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.96,
   "hfov": 8.23
  }
 ],
 "id": "overlay_F35023C8_E2F8_440D_41A4_897809C0F016",
 "data": {
  "label": "move sjd3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -36.22,
   "hfov": 19.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.82
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -36.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_2_0.png",
      "width": 353,
      "class": "ImageResourceLevel",
      "height": 250
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.82,
   "hfov": 19.21
  }
 ],
 "id": "overlay_F4C0C3C2_E328_447D_4185_E6AAF615A67A",
 "data": {
  "label": "basic ed & junior high banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -29.52,
   "hfov": 4.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.79
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -29.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_3_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.79,
   "hfov": 4.21
  }
 ],
 "id": "overlay_F4CB1BAD_E328_C407_41AA_93240ACB9CDE",
 "data": {
  "label": "basic ed & junior high show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 37.3,
   "hfov": 3.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.23
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 37.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_4_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.23,
   "hfov": 3.75
  }
 ],
 "id": "overlay_F4CE8F6D_E328_3C07_41EA_1A51974AD92E",
 "data": {
  "label": "cli show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_5_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 44.88,
   "hfov": 16.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.89
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 44.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_5_0.png",
      "width": 328,
      "class": "ImageResourceLevel",
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.89,
   "hfov": 16.17
  }
 ],
 "id": "overlay_F4C8A375_E328_4407_41D5_0756382EBAD2",
 "data": {
  "label": "cli banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.56,
   "hfov": 4.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.69
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -3.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_6_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.69,
   "hfov": 4.01
  }
 ],
 "id": "overlay_FBB01F69_E328_5C0F_41E4_4605D92FB980",
 "data": {
  "label": "senior high show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 25.18,
   "hfov": 4.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.76
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 25.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_7_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.76,
   "hfov": 4.49
  }
 ],
 "id": "overlay_FA228B43_E328_C403_41BA_E1D108793CB2",
 "data": {
  "label": "sports field show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_8_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 31.87,
   "hfov": 16.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.67
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 31.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_8_0.png",
      "width": 292,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.67,
   "hfov": 16.66
  }
 ],
 "id": "overlay_FB22CE6A_E328_5C0D_41EA_D81C43B5C709",
 "data": {
  "label": "sports field banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_9_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -9.33,
   "hfov": 13.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.89
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -9.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_9_0.png",
      "width": 265,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.89,
   "hfov": 13.74
  }
 ],
 "id": "overlay_FBBF8550_E337_CC1D_41C4_3BBF995DEB43",
 "data": {
  "label": "senior high banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -108.03,
   "hfov": 4.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -53.03
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -108.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_10_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -53.03,
   "hfov": 4.9
  }
 ],
 "id": "overlay_F3EF167B_E390_4EAF_41DF_50B2429B1C0F",
 "data": {
  "label": "move sjod1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -76.98,
   "hfov": 4.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -60.76
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -76.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_11_0.png",
      "width": 157,
      "class": "ImageResourceLevel",
      "height": 157
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -60.76,
   "hfov": 4.52
  }
 ],
 "id": "overlay_F3EE13E3_E390_C5DF_41DF_6AD80C8E4B01",
 "data": {
  "label": "move sjod3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -41.75,
   "hfov": 4.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -47.61
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -41.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_12_0.png",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 124
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.61,
   "hfov": 4.93
  }
 ],
 "id": "overlay_F3A4D8B1_E390_43BA_41C0_47FDB7472C1F",
 "data": {
  "label": "move sjod2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 35.84,
   "hfov": 5.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.73
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 35.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_13_0.png",
      "width": 121,
      "class": "ImageResourceLevel",
      "height": 121
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.73,
   "hfov": 5.07
  }
 ],
 "id": "overlay_F2D4206C_E3B0_42A9_41AA_029AF9276166",
 "data": {
  "label": "move sjod4"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 25.67,
   "hfov": 4.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.61
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 25.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9C3CF88_E2E8_7C0D_41E0_97203A1644BB_0_HS_16_0.png",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.61,
   "hfov": 4.57
  }
 ],
 "id": "overlay_F422353B_E6F4_B562_41D5_F80F0E4FE92C",
 "data": {
  "label": "move sjod5"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -161.93,
   "hfov": 6.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.3
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -161.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D577A608_E81B_B329_41E8_6E556B806394_0_HS_0_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.3,
   "hfov": 6.04
  }
 ],
 "id": "overlay_A309671B_E82E_B128_41C0_B759E595871E",
 "data": {
  "label": "move sh1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_D577A608_E81B_B329_41E8_6E556B806394_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 97.08,
   "hfov": 4.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.65
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 97.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_0_0.png",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.65,
   "hfov": 4.19
  }
 ],
 "id": "overlay_F5E89122_E3F7_D9D8_41C6_727C1A31CABC",
 "data": {
  "label": "move cli3f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 19.54,
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.45
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 19.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_1_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.45,
   "hfov": 4.96
  }
 ],
 "id": "overlay_F6674DE8_E3F5_4828_41D6_59BA8A1646C5",
 "data": {
  "label": "move cli2f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 27.03,
   "hfov": 17.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.79
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 27.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_2_0.png",
      "width": 298,
      "class": "ImageResourceLevel",
      "height": 211
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.79,
   "hfov": 17.3
  }
 ],
 "id": "overlay_F60D7B2F_E3F2_C828_41E8_45AFF58026B8",
 "data": {
  "label": "2nd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 158.73,
   "hfov": 9.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.01
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 158.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_3_0.png",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.01,
   "hfov": 9.03
  }
 ],
 "id": "overlay_F544D269_E3CD_F82B_41D1_86445C4096E2",
 "data": {
  "label": "comfort room show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 171.06,
   "hfov": 27.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 171.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_4_0.png",
      "width": 474,
      "class": "ImageResourceLevel",
      "height": 336
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10,
   "hfov": 27.65
  }
 ],
 "id": "overlay_FBA99932_E3D5_4838_41D1_EFDC5804EEE6",
 "data": {
  "label": "comfort room banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -4.83,
   "hfov": 5.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 18.46
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -4.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_5_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.46,
   "hfov": 5.67
  }
 ],
 "id": "overlay_FA6CE5B4_E3D5_3839_41E3_76D5B401AA5B",
 "data": {
  "label": "move cli4f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_6_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -11.36,
   "hfov": 14.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 22.9
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -11.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_0_HS_6_0.png",
      "width": 271,
      "class": "ImageResourceLevel",
      "height": 192
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.9,
   "hfov": 14.79
  }
 ],
 "id": "overlay_F42B0861_E3D3_485B_41EB_911F3EEFFC12",
 "data": {
  "label": "4th floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F0620BD2_E3F7_C878_41EA_2B3EA454C807_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 29.49,
   "hfov": 4.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.42
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 29.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_0_0.png",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.42,
   "hfov": 4.21
  }
 ],
 "id": "overlay_E8EA141F_E773_66F7_41E1_CDCB20F59232",
 "data": {
  "label": "move sjod5"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 17.28,
   "hfov": 16.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.59
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 17.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_1_0.png",
      "width": 289,
      "class": "ImageResourceLevel",
      "height": 205
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.59,
   "hfov": 16.66
  }
 ],
 "id": "overlay_E829682A_E772_AED9_41EB_639FC6CCC4A8",
 "data": {
  "label": "sports field banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 23.97,
   "hfov": 4.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.5
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 23.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_2_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.5,
   "hfov": 4.65
  }
 ],
 "id": "overlay_E832D480_E775_E7C9_41DD_7122364D843A",
 "data": {
  "label": "sports field show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -91.38,
   "hfov": 16.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.81
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -91.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_3_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.81,
   "hfov": 16.2
  }
 ],
 "id": "overlay_F6572B34_E773_62C9_41DE_BF2A21AD36AE",
 "data": {
  "label": "senior high banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -97.68,
   "hfov": 4.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.13
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -97.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_4_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.13,
   "hfov": 4.69
  }
 ],
 "id": "overlay_F648A6B3_E773_63CF_41A0_E23A56E73FA2",
 "data": {
  "label": "senior high show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -146.83,
   "hfov": 4.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.94
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -146.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_5_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.94,
   "hfov": 4.59
  }
 ],
 "id": "overlay_F6969D73_E772_E14F_41C9_FB0461F55C5D",
 "data": {
  "label": "junior high show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 124.61,
   "hfov": 4.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 23.36
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 124.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_6_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.36,
   "hfov": 4.33
  }
 ],
 "id": "overlay_F53E1FCB_E77D_A158_41E8_889322AB6DD9",
 "data": {
  "label": "cli show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_7_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -138.89,
   "hfov": 18.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 17.72
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -138.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_7_0.png",
      "width": 325,
      "class": "ImageResourceLevel",
      "height": 231
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.72,
   "hfov": 18.36
  }
 ],
 "id": "overlay_F68CF6B2_E77D_A3C9_41BD_DD698B59949A",
 "data": {
  "label": "junior high banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_8_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 114.96,
   "hfov": 19.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 29.02
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 114.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_8_0.png",
      "width": 378,
      "class": "ImageResourceLevel",
      "height": 268
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 29.02,
   "hfov": 19.62
  }
 ],
 "id": "overlay_F6C5FBB7_E77F_6137_41CE_3675F0F669DB",
 "data": {
  "label": "cli banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -155.03,
   "hfov": 4.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.44
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -155.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_9_0.png",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.44,
   "hfov": 4.26
  }
 ],
 "id": "overlay_F597A742_E77D_A149_41E6_F9C92AE380D1",
 "data": {
  "label": "move sjod2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -171.18,
   "hfov": 4.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.44
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -171.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_10_0.png",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44,
   "hfov": 4.5
  }
 ],
 "id": "overlay_F37596F8_E773_A339_41D2_E5AA41FB0027",
 "data": {
  "label": "move sjod4"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -105.65,
   "hfov": 4.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.34
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -105.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_0_HS_11_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.34,
   "hfov": 4.65
  }
 ],
 "id": "overlay_A9B7EAEC_E82A_B0E8_41E9_A8CD3CE920C4",
 "data": {
  "label": "move sh1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "media": "this.panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A",
 "end": "this.setComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, false, -1, this.effect_2A75FC80_30F5_4B3C_41C0_F62F3F85C778, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, true)",
 "camera": "this.panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_374A26EE_38EC_23E1_41B6_A7DF40EC70C4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, false); this.setComponentVisibility(this.HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1, true, -1, this.effect_2A75CC7F_30F5_4BC4_419B_E538E4CF410C, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_374A26EE_38EC_23E1_41B6_A7DF40EC70C4",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8",
 "end": "this.setComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, false, -1, this.effect_2945C0C8_30F7_DCCD_4195_9D64D10B4F38, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, true)",
 "camera": "this.panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_374656F0_38EC_23E1_4185_FAEE7B1BCEB9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18); this.keepComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, false); this.setComponentVisibility(this.HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C, true, -1, this.effect_2945D0C7_30F7_DCC3_41A4_F84A34AB3630, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_374656F0_38EC_23E1_4185_FAEE7B1BCEB9",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_F692A634_E81E_9379_41D7_20B83BFD553D",
 "end": "this.setComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, false, -1, this.effect_2945E0CF_30F7_DCC3_41A4_060602DAC600, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, true)",
 "camera": "this.panorama_F692A634_E81E_9379_41D7_20B83BFD553D_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_375C36F2_38EC_23E1_41AB_BAE5041B53B0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 26, 27); this.keepComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, false); this.setComponentVisibility(this.HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9, true, -1, this.effect_2945F0CF_30F7_DCC3_415C_D07BAB4556B4, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_375C36F2_38EC_23E1_41AB_BAE5041B53B0",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA",
 "camera": "this.panorama_D5052BF3_E81B_90FF_41E5_3A485CD26FCA_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_3758E6F4_38EC_23E1_41BE_92AFD557AEDA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 37, 38)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_3758E6F4_38EC_23E1_41BE_92AFD557AEDA",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241",
 "end": "this.setComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, false, -1, this.effect_C9DB9B6F_EF2E_3B6C_419E_8FAECA5774BC, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, true)",
 "camera": "this.panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_375486F5_38EC_23E3_41BB_AF8F264D9FC7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 49, 50); this.keepComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, false); this.setComponentVisibility(this.HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4, true, -1, this.effect_C9DB4B6F_EF2E_3B6C_41DE_1D364528B779, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_375486F5_38EC_23E3_41BB_AF8F264D9FC7",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A",
 "camera": "this.panorama_F42EF554_E6FD_B526_41E0_5E3862C2D50A_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_375666F5_38EC_23E3_41C9_7B3B3981507C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 51, 52)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_375666F5_38EC_23E3_41C9_7B3B3981507C",
 "class": "PanoramaPlayListItem"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 103.35,
   "hfov": 3.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.83
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 103.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_0_0.png",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83,
   "hfov": 3.82
  }
 ],
 "id": "overlay_F0425380_E39F_C659_41E9_1D61B148D882",
 "data": {
  "label": "move clig3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -94.57,
   "hfov": 6.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.29
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -94.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_1_0.png",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.29,
   "hfov": 6.24
  }
 ],
 "id": "overlay_F7AA3492_E390_427E_415A_C91DEA53ABDA",
 "data": {
  "label": "circulation area show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -173.76,
   "hfov": 6.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.5
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -173.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_2_0.png",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5,
   "hfov": 6.23
  }
 ],
 "id": "overlay_F0D82FEB_E390_3DAE_41BD_D85FA65B2206",
 "data": {
  "label": "laptop area show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 44.88,
   "hfov": 6.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.64
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 44.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_3_0.png",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.64,
   "hfov": 6.26
  }
 ],
 "id": "overlay_F75AE323_E390_465F_41E6_564039098BE6",
 "data": {
  "label": "collaborative area show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 34.41,
   "hfov": 26.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.07
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 34.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_4_0.png",
      "width": 441,
      "class": "ImageResourceLevel",
      "height": 313
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.07,
   "hfov": 26.01
  }
 ],
 "id": "overlay_F7DB595E_E390_42E9_41E1_0C1F4062B76F",
 "data": {
  "label": "collaborative area banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_5_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -104.17,
   "hfov": 24.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.83
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -104.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_5_0.png",
      "width": 416,
      "class": "ImageResourceLevel",
      "height": 295
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.83,
   "hfov": 24.68
  }
 ],
 "id": "overlay_F01F8A50_E390_46F9_41D0_F943ED2A972E",
 "data": {
  "label": "circulation area banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_6_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -163.75,
   "hfov": 25.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.59
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -163.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_6_0.png",
      "width": 425,
      "class": "ImageResourceLevel",
      "height": 302
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.59,
   "hfov": 25.21
  }
 ],
 "id": "overlay_F66E6FA9_E390_3DAB_41EA_30534C70D765",
 "data": {
  "label": "laptop area banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -81.99,
   "hfov": 5.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.61
  }
 ],
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 6, this.audio_F969F5A7_EBA1_C532_41C1_4AA0CA000271)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -81.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0CA8E3E_E390_7EA9_41A8_7D43FF5DC30A_0_HS_7_0.png",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 96
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.61,
   "hfov": 5.69
  }
 ],
 "id": "overlay_E49C6BE0_EBA7_4D2E_41E5_C245A5462F36",
 "data": {
  "label": "library audio"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 88.63,
   "hfov": 4.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.34
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 88.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_0_HS_0_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.34,
   "hfov": 4.9
  }
 ],
 "id": "overlay_DC958806_E87A_9F19_41EC_6A8F7F2CCEF7",
 "data": {
  "label": "move 4f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_C658C081_E86E_8F18_41DF_3A074F36CBD3_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -98.79,
   "hfov": 5.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.98
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -98.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0_HS_0_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.98,
   "hfov": 5.3
  }
 ],
 "id": "overlay_F33BE341_E3BD_585B_41C7_3DD87C423F72",
 "data": {
  "label": "move clig1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -105.65,
   "hfov": 16.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.78
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -105.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0_HS_1_0.png",
      "width": 289,
      "class": "ImageResourceLevel",
      "height": 205
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.78,
   "hfov": 16.48
  }
 ],
 "id": "overlay_F1B6A9A4_E3CD_C8D9_41E7_2CB5B242FFFC",
 "data": {
  "label": "ground floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -173.09,
   "hfov": 4.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.84
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -173.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0_HS_2_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.84,
   "hfov": 4.93
  }
 ],
 "id": "overlay_F08129B6_E3D7_C838_41E7_A3C3DCA5EF98",
 "data": {
  "label": "move cli2f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -78.93,
   "hfov": 16.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 17.59
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -78.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0_HS_3_0.png",
      "width": 284,
      "class": "ImageResourceLevel",
      "height": 201
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.59,
   "hfov": 16.07
  }
 ],
 "id": "overlay_F0302018_E3F2_F7E9_41E1_AD41E5F0BBC2",
 "data": {
  "label": "3rd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -71.7,
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.49
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -71.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_0_HS_4_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.49,
   "hfov": 5.41
  }
 ],
 "id": "overlay_F034CE00_E3FD_4BD9_41CD_2F3FBEE5D408",
 "data": {
  "label": "move cli3f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_ED0AFD77_E3B3_4827_41E0_28726210E96C_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 110.29,
   "hfov": 4.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.11
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 110.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0_HS_0_0.png",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.11,
   "hfov": 4.2
  }
 ],
 "id": "overlay_FB305E4C_E3B2_C868_41E0_5B1439F760EE",
 "data": {
  "label": "move cli4f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 43.32,
   "hfov": 18.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.6
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 43.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0_HS_1_0.png",
      "width": 322,
      "class": "ImageResourceLevel",
      "height": 229
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.6,
   "hfov": 18.58
  }
 ],
 "id": "overlay_FB432182_E3B5_D8D9_41D4_A5927805F5BB",
 "data": {
  "label": "3rd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 34.9,
   "hfov": 5.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.82
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 34.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0_HS_2_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.82,
   "hfov": 5.35
  }
 ],
 "id": "overlay_FB34A334_E3B5_5838_41EA_0324D7B8CF9B",
 "data": {
  "label": "move cli3f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 6.3,
   "hfov": 5.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 21.15
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 6.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0_HS_3_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.15,
   "hfov": 5.58
  }
 ],
 "id": "overlay_F9C513FE_E3B3_3829_41EB_54AEDF29374A",
 "data": {
  "label": "move rtf1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -1.27,
   "hfov": 15.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 26.04
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -1.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_0_HS_4_0.png",
      "width": 292,
      "class": "ImageResourceLevel",
      "height": 207
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.04,
   "hfov": 15.54
  }
 ],
 "id": "overlay_F981A72C_E3B5_D829_41EA_0AC0246C25D4",
 "data": {
  "label": "rooftop banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F56A6BE2_E3D5_C859_41E5_19B148D07C53_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 166.98,
   "hfov": 5.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.23
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 166.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_0_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23,
   "hfov": 5.92
  }
 ],
 "id": "overlay_F422AD4E_E796_A159_41DB_454247D6C30C",
 "data": {
  "label": "move sjod2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 83.13,
   "hfov": 4.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.31
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 83.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_1_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.31,
   "hfov": 4.91
  }
 ],
 "id": "overlay_F3B33726_E792_E2C9_41E3_99DC42D665E3",
 "data": {
  "label": "move be2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 7.1,
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.2
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 7.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_2_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.2,
   "hfov": 4.38
  }
 ],
 "id": "overlay_F3D783D5_E793_A14B_41CC_BA53F3E59734",
 "data": {
  "label": "move be1f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -17.07,
   "hfov": 5.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.55
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -17.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_3_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 92
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.55,
   "hfov": 5.45
  }
 ],
 "id": "overlay_F30633C6_E793_A149_41BC_023900EB9D43",
 "data": {
  "label": "move be1f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 76.34,
   "hfov": 15.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.09
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 76.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_4_0.png",
      "width": 273,
      "class": "ImageResourceLevel",
      "height": 193
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.09,
   "hfov": 15.74
  }
 ],
 "id": "overlay_F54D2845_E7E6_9F1B_41DA_F334DE701B14",
 "data": {
  "label": "2nd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 108.75,
   "hfov": 4.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.35
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 108.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_0_HS_5_0.png",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.35,
   "hfov": 4.32
  }
 ],
 "id": "overlay_FF4FB919_E937_D327_41BE_EE5CCD75FB3E",
 "data": {
  "label": "move sjod7"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F3A70D31_E793_A6CB_41B9_44387CDB2DB8_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -121.08,
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.24
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -121.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_0_HS_0_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.24,
   "hfov": 5.32
  }
 ],
 "id": "overlay_DC771072_E865_8FF9_41EC_380AA52F5E60",
 "data": {
  "label": "move 4f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_C64F66C0_E86F_7318_41E5_65547DB5D144_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 91.69,
   "hfov": 4.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.95
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 91.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0_HS_0_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.95,
   "hfov": 4.69
  }
 ],
 "id": "overlay_BE6FFF22_E8EA_9119_41EA_475F677CF2AE",
 "data": {
  "label": "move sh2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -87.32,
   "hfov": 4.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.5
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -87.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5999678_E81E_93E9_41E5_6F99159B9343_0_HS_1_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.5,
   "hfov": 4.63
  }
 ],
 "id": "overlay_B1A5B3F8_E8ED_90E9_41EC_0E730E83929B",
 "data": {
  "label": "move jh1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_A5999678_E81E_93E9_41E5_6F99159B9343_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.19,
   "hfov": 5.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.31
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 179.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F106089E_E795_6FF9_41D7_99293685C20F_0_HS_0_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.31,
   "hfov": 5.01
  }
 ],
 "id": "overlay_F2B78F5D_E795_617B_41D1_9D768ABCB7F2",
 "data": {
  "label": "move be1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F106089E_E795_6FF9_41D7_99293685C20F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -90.47,
   "hfov": 4.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.15
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -90.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0_HS_0_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.15,
   "hfov": 4.86
  }
 ],
 "id": "overlay_FB417245_E3B3_3858_41E6_B19CD04329E3",
 "data": {
  "label": "move cli4f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 87.96,
   "hfov": 4.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.48
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 87.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_0_HS_1_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.48,
   "hfov": 4.66
  }
 ],
 "id": "overlay_FBAC44B5_E3B3_7838_41E0_995BD7B1E1FD",
 "data": {
  "label": "move cli4f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F59AD3A8_E3D5_3829_41B4_E826928C8D35_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 144.65,
   "hfov": 5.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.39
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 144.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_0_HS_0_0.png",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.39,
   "hfov": 5.76
  }
 ],
 "id": "overlay_A1D7E8A8_E82B_9F69_41EC_402E8276E8D6",
 "data": {
  "label": "move sh1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_D57BBEFB_E81B_B0EF_41CB_F03789E11D11_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -175.7,
   "hfov": 5.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.01
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -175.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_0_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.01,
   "hfov": 5.92
  }
 ],
 "id": "overlay_CFB30CB5_E81E_9778_41D4_A9CCAA14CDF1",
 "data": {
  "label": "move jh3f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -126.2,
   "hfov": 5.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.09
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -126.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_1_0.png",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.09,
   "hfov": 5.14
  }
 ],
 "id": "overlay_C1603317_E81D_B127_41D1_DB120AEF4768",
 "data": {
  "label": "move jh3f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 75.31,
   "hfov": 5.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.07
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 75.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_2_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.07,
   "hfov": 5.06
  }
 ],
 "id": "overlay_C54EE111_E81A_B13B_41D6_B5728BFB34BF",
 "data": {
  "label": "move jh2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 96.36,
   "hfov": 5.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.12
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 96.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_3_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.12,
   "hfov": 5.25
  }
 ],
 "id": "overlay_C389D251_E865_7338_41BF_7F8AF2FCF901",
 "data": {
  "label": "move jh4f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 67.75,
   "hfov": 17.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.29
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 67.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_4_0.png",
      "width": 299,
      "class": "ImageResourceLevel",
      "height": 212
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.29,
   "hfov": 17.52
  }
 ],
 "id": "overlay_C3CF0F03_E865_911F_41E0_8DAAA2EBBBFE",
 "data": {
  "label": "2nd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_5_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 103.9,
   "hfov": 17.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.43
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 103.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C541BE94_E81A_F339_41DA_C3229365F03C_0_HS_5_0.png",
      "width": 307,
      "class": "ImageResourceLevel",
      "height": 218
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.43,
   "hfov": 17.56
  }
 ],
 "id": "overlay_C3A46BBF_E866_B167_41C3_E5DDF2A42004",
 "data": {
  "label": "4th floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_C541BE94_E81A_F339_41DA_C3229365F03C_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 106.71,
   "hfov": 4.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.17
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 106.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_0_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 81
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.17,
   "hfov": 4.81
  }
 ],
 "id": "overlay_CA2DE462_E82D_7719_41E4_E3F208636953",
 "data": {
  "label": "move jh2f3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 155.28,
   "hfov": 4.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.77
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 155.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_1_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.77,
   "hfov": 4.92
  }
 ],
 "id": "overlay_CA9DF67B_E82E_B3EF_41D0_A44B2D6BBD7A",
 "data": {
  "label": "move jh2f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 9.37,
   "hfov": 4.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.81
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 9.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_2_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.81,
   "hfov": 4.9
  }
 ],
 "id": "overlay_CCEE9DFA_E82A_90E8_41AF_7505249C7016",
 "data": {
  "label": "move jh3f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 16.29,
   "hfov": 15.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.73
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 16.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_3_0.png",
      "width": 265,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.73,
   "hfov": 15.24
  }
 ],
 "id": "overlay_CD54EC32_E82B_9778_41D5_792695B06EB4",
 "data": {
  "label": "3rd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.32,
   "hfov": 5.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.03
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -12.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_4_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 92
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.03,
   "hfov": 5.31
  }
 ],
 "id": "overlay_CF18655B_E825_B12F_41E0_955AAFF55FC1",
 "data": {
  "label": "move jh1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_5_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -18.98,
   "hfov": 15.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.71
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -18.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8A95B32_E825_B178_41D5_56799875B2B3_0_HS_5_0.png",
      "width": 258,
      "class": "ImageResourceLevel",
      "height": 183
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.71,
   "hfov": 15.05
  }
 ],
 "id": "overlay_CF056347_E826_F127_41E5_64863FA2E381",
 "data": {
  "label": "ground floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_C8A95B32_E825_B178_41D5_56799875B2B3_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -0.24,
   "hfov": 4.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.07
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -0.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_0_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 81
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.07,
   "hfov": 4.82
  }
 ],
 "id": "overlay_AFFE982D_E826_BF6B_41A1_AA2D35495325",
 "data": {
  "label": "move sjod6"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.24,
   "hfov": 4.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.07
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -179.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_1_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07,
   "hfov": 4.96
  }
 ],
 "id": "overlay_A047124C_E826_9329_41E1_93BAF7F600F9",
 "data": {
  "label": "move sh1f2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -127.24,
   "hfov": 8.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.8
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -127.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_2_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.8,
   "hfov": 8.19
  }
 ],
 "id": "overlay_AE0CA5EA_E83B_90E8_41A5_6A427D795D1C",
 "data": {
  "label": "move sh1f5R"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -55.57,
   "hfov": 7.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.73
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -55.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_3_0.png",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.73,
   "hfov": 7.8
  }
 ],
 "id": "overlay_AEC41A2B_E83B_936F_41E7_87125D6E01DA",
 "data": {
  "label": "move sh1f6R"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 54.57,
   "hfov": 8.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.71
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 54.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_4_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 146
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.71,
   "hfov": 8.65
  }
 ],
 "id": "overlay_AFC10F63_E83B_911F_41E3_17AB02DFB792",
 "data": {
  "label": "move sh1f4R"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_5_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -4.94,
   "hfov": 12.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.48
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -4.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_0_HS_5_0.png",
      "width": 210,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.48,
   "hfov": 12.44
  }
 ],
 "id": "overlay_CDAD11E4_E97F_D2ED_41D3_C015C1FD181C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_D7F8A1C9_E81B_912B_41EB_B3D7B669BF96_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 98.91,
   "hfov": 4.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.29
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 98.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_0_HS_0_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.29,
   "hfov": 4.73
  }
 ],
 "id": "overlay_CFE5407E_E81E_8FE8_41C4_69D7D1CE8271",
 "data": {
  "label": "move jh3f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_CE5DF15D_E81A_B12B_41E5_8CF2C01191A6_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -1.15,
   "hfov": 4.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.8
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -1.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0_HS_0_0.png",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.8,
   "hfov": 4.45
  }
 ],
 "id": "overlay_F253BF2D_E3B0_FEAB_41C4_13406056F3DC",
 "data": {
  "label": "move sjod4"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -93.63,
   "hfov": 4.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.58
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -93.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0_HS_1_0.png",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.58,
   "hfov": 4.33
  }
 ],
 "id": "overlay_F18BD398_E3B0_C66A_41D2_90F188D5B5C9",
 "data": {
  "label": "move clig2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0_HS_2_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -141.02,
   "hfov": 11.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.92
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -141.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0_HS_2_0.png",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.92,
   "hfov": 11.57
  }
 ],
 "id": "overlay_F1668A29_E391_C6AB_41DD_AAC505CCF9F3",
 "data": {
  "label": "move clig3"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 90.04,
   "hfov": 4.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.72
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 90.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0_HS_3_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.72,
   "hfov": 4.42
  }
 ],
 "id": "overlay_ED948FDA_E3B7_4869_41DA_D9512F0EAEAA",
 "data": {
  "label": "move cli2f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 84.05,
   "hfov": 14.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.89
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 84.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_0_HS_4_0.png",
      "width": 238,
      "class": "ImageResourceLevel",
      "height": 168
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.89,
   "hfov": 14.08
  }
 ],
 "id": "overlay_F2085A8F_E3CD_48E8_41BC_9741D96AEE96",
 "data": {
  "label": "2nd floor banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -148.25,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.9
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -148.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0_HS_0_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 81
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.9,
   "hfov": 4.83
  }
 ],
 "id": "overlay_EDCB0A2C_E370_C6A9_41EC_243DE68D1625",
 "data": {
  "label": "move sjod1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -18.54,
   "hfov": 4.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.22
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -18.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0_HS_1_0.png",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.22,
   "hfov": 4.52
  }
 ],
 "id": "overlay_EDB72823_E377_C25F_41D7_720E8A7ABB0A",
 "data": {
  "label": "move sjod2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -8.85,
   "hfov": 4.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 19.23
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -8.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0_HS_2_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.23,
   "hfov": 4.45
  }
 ],
 "id": "overlay_ED84658E_E370_4269_41DA_75C54A061420",
 "data": {
  "label": "basic ed & junior high show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -0.67,
   "hfov": 18.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 24.12
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -0.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0_HS_3_0.png",
      "width": 349,
      "class": "ImageResourceLevel",
      "height": 248
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 24.12,
   "hfov": 18.89
  }
 ],
 "id": "overlay_ED9B17D5_E371_CDFB_41D5_38B0CBF6BF61",
 "data": {
  "label": "basic ed & junior high banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 7.25,
   "hfov": 4.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.42
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 7.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_0_HS_4_0.png",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.42,
   "hfov": 4.44
  }
 ],
 "id": "overlay_F5F6192A_E772_EED9_41BE_09D512265162",
 "data": {
  "label": "move sjod4"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_EEE46AE0_E31D_B12B_41E5_824B6FB97130_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 175.59,
   "hfov": 5.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.35
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 175.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_0_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 89
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.35,
   "hfov": 5.31
  }
 ],
 "id": "overlay_ECCF6894_E370_427A_41E3_6687B1C51384",
 "data": {
  "label": "move sjod1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -30.88,
   "hfov": 7.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.63
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -30.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_1_0.png",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 124
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.63,
   "hfov": 7.24
  }
 ],
 "id": "overlay_F343FF7B_E370_5EAF_41B3_154078E582FC",
 "data": {
  "label": "basic education show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 23.7,
   "hfov": 7.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.95
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 23.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_2_0.png",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 124
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.95,
   "hfov": 7.25
  }
 ],
 "id": "overlay_F348545B_E373_C2EE_41EA_FE6DE6D5255A",
 "data": {
  "label": "junior high show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_3_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -40.76,
   "hfov": 25.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 16.68
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -40.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_3_0.png",
      "width": 450,
      "class": "ImageResourceLevel",
      "height": 319
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.68,
   "hfov": 25.57
  }
 ],
 "id": "overlay_ECA19FEC_E370_3DAA_41CB_41D478E9B86D",
 "data": {
  "label": "basic education banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_4_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 33.68,
   "hfov": 25.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 16.3
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 33.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_4_0.png",
      "width": 445,
      "class": "ImageResourceLevel",
      "height": 315
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.3,
   "hfov": 25.32
  }
 ],
 "id": "overlay_F2A6D35B_E370_C6EF_41EB_DA867E0E0E8C",
 "data": {
  "label": "junior high school show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -23.73,
   "hfov": 4.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.02
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -23.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_6_0.png",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.02,
   "hfov": 4.23
  }
 ],
 "id": "overlay_F362081B_E390_C26F_41A6_E52A09E0BBDD",
 "data": {
  "label": "move be1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 15.73,
   "hfov": 3.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.01
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 15.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_8_0.png",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.01,
   "hfov": 3.7
  }
 ],
 "id": "overlay_F233AB3A_E390_46A9_41E7_46F9E34B9F3D",
 "data": {
  "label": "move jh1f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 57.64,
   "hfov": 4.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.86
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 57.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_9_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.86,
   "hfov": 4.03
  }
 ],
 "id": "overlay_F5B1E33C_E775_E138_41E3_FFAA61ED10C4",
 "data": {
  "label": "move sjod6"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 83.01,
   "hfov": 4.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.46
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 83.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_10_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46,
   "hfov": 4.88
  }
 ],
 "id": "overlay_F5F4B872_E773_6F49_41E6_063A6D149A39",
 "data": {
  "label": "move sjod4"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.68,
   "hfov": 4.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.17
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -3.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_11_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.17,
   "hfov": 4.4
  }
 ],
 "id": "overlay_FB4D6956_EB8D_D093_41DF_73B08DA864A7",
 "data": {
  "label": "move sjod11"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -26.75,
   "hfov": 3.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 14.79
  }
 ],
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 47, this.audio_FA8F882A_EBA3_4B32_41E4_5F8B096BFBAA)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -26.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_12_0.png",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 65
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.79,
   "hfov": 3.75
  }
 ],
 "id": "overlay_FBB43DAC_EBAF_4536_41E2_3C9D44781BB5",
 "data": {
  "label": "basic ed audio"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 19.6,
   "hfov": 3.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.15
  }
 ],
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 47, this.audio_FA149FCC_EBA1_C575_41EC_FFC8BA936036)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 19.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_13_0.png",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 61
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.15,
   "hfov": 3.55
  }
 ],
 "id": "overlay_FB1BCD5C_EBAF_4516_41DD_D7C43D669004",
 "data": {
  "label": "junior high audio"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -6.6,
   "hfov": 3.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 29.41
  }
 ],
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 47, this.audio_FA2641DB_EBA1_3D12_41E8_443C85917C1E)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -6.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EEE1CB03_E31D_90ED_41E4_8EC86AA91CBB_0_HS_14_0.png",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 65
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 29.41,
   "hfov": 3.4
  }
 ],
 "id": "overlay_FB4CAA03_EBAF_4EF3_41EB_24180B2DE4A1",
 "data": {
  "label": "basic and junior audio"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 17.04,
   "hfov": 5.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.53
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 17.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_0_0.png",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.53,
   "hfov": 5.89
  }
 ],
 "id": "overlay_F2EF9430_E3B1_C2B9_41E4_3BA5467EA372",
 "data": {
  "label": "cli show"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_1_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 27.55,
   "hfov": 25.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 19.11
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 27.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_1_0.png",
      "width": 455,
      "class": "ImageResourceLevel",
      "height": 323
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.11,
   "hfov": 25.47
  }
 ],
 "id": "overlay_F2983F28_E3B0_3EA9_4194_66ABBA82D202",
 "data": {
  "label": "cli banner"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.92,
   "hfov": 5.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.07
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 2.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_2_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07,
   "hfov": 5.21
  }
 ],
 "id": "overlay_F1208464_E3B0_42DA_41E2_380C809DA1E1",
 "data": {
  "label": "move clig1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -73.88,
   "hfov": 4.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.4
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -73.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_3_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.4,
   "hfov": 4.03
  }
 ],
 "id": "overlay_F5EB6575_E777_E14B_41D9_AE8BD9FAEC18",
 "data": {
  "label": "move sjod6"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -89.03,
   "hfov": 3.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.14
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -89.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_4_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 66
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.14,
   "hfov": 3.95
  }
 ],
 "id": "overlay_F5BC6CE4_E776_E749_41DD_5440E5C70CA4",
 "data": {
  "label": "move sjod2"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 13.27,
   "hfov": 3.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.76
  }
 ],
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 49, this.audio_F980435D_EBA7_3D16_41E6_BC665FDF9341)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 13.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F14881C7_E3B0_C5E7_41D5_F50870A4F241_0_HS_5_0.png",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.76,
   "hfov": 3.66
  }
 ],
 "id": "overlay_FB44F958_EBA7_4D1E_41A1_54A4854EF146",
 "data": {
  "label": "audio cli"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 90.33,
   "hfov": 4.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.01
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 90.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_0_HS_0_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.01,
   "hfov": 4.68
  }
 ],
 "id": "overlay_F33F0193_E7E5_F138_41DC_F78DE34B4B3D",
 "data": {
  "label": "move be3f1"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 37.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_F6F2F885_E3B0_425A_41D4_85DF770EE807_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F47332A8_E7FA_B369_41D7_E5D3B97BA739_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "maxWidth": 3000,
 "id": "Image_F92BD131_EEFA_04F4_41E4_FDAA2565E258",
 "left": "0%",
 "maxHeight": 2,
 "backgroundOpacity": 0,
 "right": "0%",
 "borderRadius": 0,
 "url": "skin/Image_F92BD131_EEFA_04F4_41E4_FDAA2565E258.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_F92BF131_EEFA_04F4_41D8_9EC3D0CB0CA9",
 "left": "0%",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_F92B8131_EEFA_04F4_41DA_CD6EA68BBB3D",
  "this.Button_F92BA131_EEFA_04F4_41E9_A6E12B334634",
  "this.Button_F92B4131_EEFA_04F4_41CB_56BCE4726090",
  "this.Button_F92B5131_EEFA_04F4_4193_63174F49F473",
  "this.Button_ECE0DB00_F108_7BE4_41EA_963F130C756A"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "paddingLeft": 30,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
 "left": 0,
 "width": 220,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0.01
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#006600"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 44,
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "green block"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
 "left": "0%",
 "width": 286,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.5,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": 48,
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 68,
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "white block"
 },
 "shadowBlurRadius": 10,
 "shadowSpread": 1
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "left": 12,
 "width": 240,
 "textShadowColor": "#000000",
 "backgroundOpacity": 0,
 "textShadowHorizontalLength": 0,
 "borderRadius": 0,
 "text": "LORMA CAMPUS",
 "minHeight": 1,
 "textShadowVerticalLength": 0,
 "propagateClick": false,
 "top": 2,
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "paddingRight": 0,
 "height": 44,
 "minWidth": 1,
 "fontSize": 29,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "paddingLeft": 0,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B",
 "left": 10,
 "width": 336,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "text": "SAN JUAN",
 "minHeight": 1,
 "propagateClick": false,
 "top": 40,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 69,
 "minWidth": 1,
 "fontSize": 61,
 "class": "Label",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "paddingLeft": 0,
 "data": {
  "name": "text 2"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#000000"
},
{
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_F0ED9970_E793_6149_41E6_D857883AD46E",
 "left": 0,
 "width": "100%",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "itemOpacity": 1,
 "height": 208,
 "playList": "this.ThumbnailList_F0ED9970_E793_6149_41E6_D857883AD46E_playlist",
 "verticalAlign": "top",
 "minWidth": 20,
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailList",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#000000",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "horizontal",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "borderRadius": 5,
 "itemLabelGap": 3,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": 0,
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 13,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 20,
 "itemMode": "normal",
 "data": {
  "name": "aerial"
 },
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial"
},
{
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_FFB0FAC9_E7EE_B32B_41D7_14040F3028C3",
 "left": "0%",
 "width": "100%",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "itemOpacity": 1,
 "height": 208,
 "playList": "this.ThumbnailList_FFB0FAC9_E7EE_B32B_41D7_14040F3028C3_playlist",
 "verticalAlign": "top",
 "minWidth": 20,
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailList",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#000000",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "horizontal",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "borderRadius": 5,
 "itemLabelGap": 3,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": "0%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 13,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 20,
 "itemMode": "normal",
 "data": {
  "name": "basic edu"
 },
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial"
},
{
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_AC6E3E45_E86E_9318_41DF_9F94DB64D8CB",
 "left": "0%",
 "width": "100%",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "itemOpacity": 1,
 "height": 208,
 "playList": "this.ThumbnailList_AC6E3E45_E86E_9318_41DF_9F94DB64D8CB_playlist",
 "verticalAlign": "top",
 "minWidth": 20,
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailList",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#000000",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "horizontal",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "borderRadius": 5,
 "itemLabelGap": 3,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": "0%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 13,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 20,
 "itemMode": "normal",
 "data": {
  "name": "junior high"
 },
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial"
},
{
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_8828A8A0_E8FA_9F18_419A_B969AA37C137",
 "left": "0%",
 "width": "100%",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "itemOpacity": 1,
 "height": 208,
 "playList": "this.ThumbnailList_8828A8A0_E8FA_9F18_419A_B969AA37C137_playlist",
 "verticalAlign": "top",
 "minWidth": 20,
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailList",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#000000",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "horizontal",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "borderRadius": 5,
 "itemLabelGap": 3,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": "0%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 13,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 20,
 "itemMode": "normal",
 "data": {
  "name": "senior high"
 },
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial"
},
{
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_B50C9E5D_A0AB_CFD4_41DC_5943614E759B",
 "left": "0%",
 "width": "100%",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "itemOpacity": 1,
 "height": 208,
 "playList": "this.ThumbnailList_B50C9E5D_A0AB_CFD4_41DC_5943614E759B_playlist",
 "verticalAlign": "top",
 "minWidth": 20,
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailList",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#000000",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "horizontal",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "borderRadius": 5,
 "itemLabelGap": 3,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": "0%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 13,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 20,
 "itemMode": "normal",
 "data": {
  "name": "cli"
 },
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial"
},
{
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_B5327F52_A0AB_4D2D_41D7_51D5F5899E68",
 "left": "0%",
 "width": "100%",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "itemOpacity": 1,
 "height": 208,
 "playList": "this.ThumbnailList_B5327F52_A0AB_4D2D_41D7_51D5F5899E68_playlist",
 "verticalAlign": "top",
 "minWidth": 20,
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailList",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#000000",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "horizontal",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "borderRadius": 5,
 "itemLabelGap": 3,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": "0%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 13,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 20,
 "itemMode": "normal",
 "data": {
  "name": "facilities"
 },
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_CFE86D1F_EF26_1CAC_41DB_CC2BCF8BAF39",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 20,
 "backgroundColor": [
  "#003300"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>SAN JUAN CAMPUS</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"><B>Basic education, junior and senior high school, and tertiary programs are offered on the San Juan campus by the colleges of Education and Sciences, Business, and Computer Studies and Engineering.</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "sanjuan campus"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_E126FB85_F108_7AEC_41A0_D821D604D2BD",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 20,
 "backgroundColor": [
  "#003300"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>CAFETERIA</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"><B>Here you can find a variety of healthy foods for snacks and lunch available to all students, faculty and staff of Lorma Colleges.</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "cafeteria"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_E1070233_F10F_8A24_41E8_F4493C0193AC",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 20,
 "backgroundColor": [
  "#003300"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>STAGE</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"><B>Lormanians from all levels of education, including elementary, secondary, and tertiary, can attend and enjoy any of the events presented here.</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "stage"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_232527AB_30FC_C543_41C6_EA3ED999FED1",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 20,
 "backgroundColor": [
  "#003300"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>LIBRARY</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"><B>Contains a collection of periodicals, books, or media that students can access on a daily basis.</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "library"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2599F119_30FF_5D4C_41B0_9C16CAC6A9A0",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 20,
 "backgroundColor": [
  "#003300"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>BUSINESS OFFICE</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"><B>This is where students transact for costs associated with their education.</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "business office"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_E5C2B7BC_F10B_8A1C_41D0_02810B92D5A4",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 20,
 "backgroundColor": [
  "#003300"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>BASIC EDU. &amp; JUNIOR HIGH</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"><B>This structure houses basic education from pre-kindergarten to junior high school.</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "basic ed and junior high"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2330CF2D_30F5_4547_41C0_FED80E88F13C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 20,
 "backgroundColor": [
  "#003300"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>BASIC EDUCATION</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"><B>This structure is for Basic Education, which includes Pre-school through Elementary School.</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "basic edu"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_238DDC58_30F7_CBCC_41C5_F2B49FAA7AC9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 20,
 "backgroundColor": [
  "#003300"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>JUNIOR HIGH SCHOOL</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"><B>This building is intended for the special science highschool</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "junior high"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_24D58E17_30F4_C743_41B1_5BAFC40668F5",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 20,
 "backgroundColor": [
  "#003300"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>SENIOR HIGH SCHOOL</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"><B>This structure houses the senior high school. It offers accountancy and business management, humanities and social sciences, information and communication technology, science technology, engineering and mathematics, and the LORMA exclusive STEM HAS</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "senior high"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_CFF3D34D_EF1A_04AC_41A3_EE4310D0D7E4",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 20,
 "backgroundColor": [
  "#003300"
 ],
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "HTMLText",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>CLI</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"><B>The building was first occupied in the 2nd semester of school year 2019-2020 by the college students who are enrolled in non-medical related programs under the College of Computer Science and Engineering, College of Business, and College of Education and Sciences.</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 20,
 "scrollBarColor": "#000000",
 "data": {
  "name": "cli"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "left": "10%",
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "left": "10%",
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "left": "15%",
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "7%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "left": "15%",
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "7%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 4,
 "paddingLeft": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076",
 "left": "15%",
 "children": [
  "this.Container_20EC87A3_174C_050A_4198_F9830A58FD09",
  "this.Container_2F7D65D9_1744_0506_41B3_4FD17B01B645"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "7%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 6,
 "paddingLeft": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "left": "10%",
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "left": "10%",
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "data": {
  "name": "Button school info"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_F92B8131_EEFA_04F4_41DA_CD6EA68BBB3D",
 "backgroundOpacity": 0,
 "width": 120,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#003300"
 ],
 "gap": 5,
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "SCHOOL INFO",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "data": {
  "name": "Button location"
 },
 "id": "Button_F92BA131_EEFA_04F4_41E9_A6E12B334634",
 "backgroundOpacity": 0,
 "width": 100,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#003300"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "LOCATION",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "data": {
  "name": "Button photoalbum"
 },
 "id": "Button_F92B4131_EEFA_04F4_41CB_56BCE4726090",
 "backgroundOpacity": 0,
 "width": 122,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PHOTOALBUM",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "data": {
  "name": "Button contact"
 },
 "id": "Button_F92B5131_EEFA_04F4_4193_63174F49F473",
 "backgroundOpacity": 0,
 "width": 100,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#003300"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, true, 0, null, null, false)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "CONTACT",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "data": {
  "name": "Button lormakad"
 },
 "id": "Button_ECE0DB00_F108_7BE4_41EA_963F130C756A",
 "backgroundOpacity": 0,
 "width": 100,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#003300"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.openLink('https://tour.lorma.edu/', '_top')",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "LORMAKAD",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "width": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "width": 58,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://www.facebook.com/THELORMASCHOOLS', '_blank')",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "backgroundOpacity": 1,
 "children": [
  "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
  "this.Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
  "this.Image_FEF93CA0_EBBF_4B2E_41BF_A7A30EB8B960"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 50,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "minHeight": 40,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "backgroundOpacity": 1,
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 80,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "backgroundOpacity": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "rollOverItemLabelFontSize": 16,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#C1280E",
 "itemVerticalAlign": "top",
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 70,
 "itemOpacity": 1,
 "height": "100%",
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "class": "ThumbnailGrid",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "scrollBarColor": "#FF361B",
 "itemHeight": 160,
 "shadow": false,
 "selectedItemLabelFontSize": 16,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#C1280E",
 "scrollBarOpacity": 0.5,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 30,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "paddingLeft": 70,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "itemLabelFontFamily": "Oswald Regular"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "backgroundOpacity": 1,
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#003300"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 80,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "backgroundOpacity": 1,
 "width": "100%",
 "borderRadius": 0,
 "insetBorder": false,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.3202322467748!2d120.32758388665718!3d16.661438674104794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33918d916741f669%3A0x2115ea4e019b6924!2sLorma%20Grade%20School%20%26%20Pre-School%20Campus!5e1!3m2!1sen!2sph!4v1632484555214!5m2!1sen!2sph",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "class": "WebFrame",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "paddingLeft": 0,
 "data": {
  "name": "WebFrame52781"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_20EC87A3_174C_050A_4198_F9830A58FD09",
 "backgroundOpacity": 1,
 "children": [
  "this.HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
  "this.IconButton_20ECE7A3_174C_050A_41B4_AF609035102C"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 80,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F7D65D9_1744_0506_41B3_4FD17B01B645",
 "backgroundOpacity": 1,
 "children": [
  "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
  "this.Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-photoalbum"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
  "this.Image_FEA421D1_EBA3_3D6E_41D1_142BAC1C2EBA"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
  "this.Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 50,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "backgroundOpacity": 0,
 "width": "25%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "minHeight": 40,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 40,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "right": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "bottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeight": 10,
 "visible": false,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
 "left": "0%",
 "children": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container arrows"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 1224,
 "maxWidth": 979,
 "id": "Image_FEF93CA0_EBBF_4B2E_41BF_A7A30EB8B960",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_FEF93CA0_EBBF_4B2E_41BF_A7A30EB8B960.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image10317"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
  "this.Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "height": 40,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 80,
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 17,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.46vh;font-family:'Oswald';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxWidth": 50,
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "right": 15,
 "width": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "minHeight": 40,
 "propagateClick": false,
 "top": 15,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 50,
 "minWidth": 40,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 80,
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 17,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.46vh;font-family:'Oswald';\"><B>LOCATION/</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxWidth": 50,
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "right": 15,
 "width": 70,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "minHeight": 40,
 "propagateClick": false,
 "top": 15,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 70,
 "minWidth": 40,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 80,
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 17,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.46vh;font-family:'Oswald';\"><B>PHOTOALBUM/</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxWidth": 50,
 "id": "IconButton_20ECE7A3_174C_050A_41B4_AF609035102C",
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "right": 15,
 "width": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_rollover.jpg",
 "minHeight": 40,
 "propagateClick": false,
 "top": 15,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 50,
 "minWidth": 40,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "right": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "bottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0",
 "left": "0%",
 "children": [
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
  "this.Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container arrows"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_182FD4E7_17B7_EF41_41AA_D495544C1972.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image5820"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 1224,
 "maxWidth": 979,
 "id": "Image_FEA421D1_EBA3_3D6E_41D1_142BAC1C2EBA",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_FEA421D1_EBA3_3D6E_41D1_142BAC1C2EBA.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scaleMode": "fill",
 "data": {
  "name": "Image9624"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 50,
 "class": "Container",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
  "this.Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
  "this.Button_1830D20E_17B1_6AC3_4198_688BED36E073"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 25,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "-Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "height": 40,
 "class": "Container",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 130,
 "maxWidth": 130,
 "id": "IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
 "backgroundOpacity": 0,
 "width": "8%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_rollover.png",
 "minHeight": 70,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "8%",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton left arrow"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
 "backgroundOpacity": 0,
 "width": "84%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "30%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container separator"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 130,
 "maxWidth": 130,
 "id": "IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
 "backgroundOpacity": 0,
 "width": "8%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_rollover.png",
 "minHeight": 70,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "8%",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton right arrow"
 },
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "100%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.97vh;font-family:'Oswald';\"><B>SCHOOL INFO</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.62vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#006600;font-size:2.62vh;font-family:'Oswald Regular';\">THE LORMA SCHOOLS, YOUR PATHWAY TO A BRIGHTER FUTURE!</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;\">Founded in 1970 by its first director Dr. Rufino L. Macagba Jr., the school was initially established to fill the need for a nursing school in support of the fast expanding then Lorma Hospital (now Lorma Medical Center).</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;\">He pushed forth this vision and endeavor through the encouragement of the LORMA founders who were both doctor-educators Dr. Rufino N. Macagba Sr. and Dra. Crispina Lorenzana-Macagba.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;\">\u200b</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;\">Aptly named Lorma to refer to the first syllable of the founder\u2019s surname LORenzana and MAcagba, the school grew from a small nursing school to a higher education recognized as the region\u2019s best performing school. With a solid record of recognitions received for its exemplary performance in the Board Examinations in paramedical courses including Nursing, Radiologic Technology and Physical Therapy since 1989 to present, LORMA continues to produce the greatest number of board topnotchers in the region.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;\">\u200b</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;\">Lorma Colleges is the first ever institution in Region 1 to be recognized highly by CHED as a Center of Development for Excellence in Information Technology (CODE-IT).</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;\">\u200b</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;\">Through the years, Lorma Colleges has received numerous accolades and recogntion in its continuing effort to excel in healthcare, education and community service.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingLeft": 10,
 "scrollBarColor": "#003300",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "data": {
  "name": "Button31015"
 },
 "id": "Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4",
 "backgroundOpacity": 1,
 "width": 207,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#003300"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.openLink('https://2020.lorma.edu/', '_blank')",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#006600"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 59,
 "fontSize": "3.7vh",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "READ MORE",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
 "backgroundOpacity": 0,
 "width": "10%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_rollover.png",
 "minHeight": 70,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "10%",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton left arrow"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
 "backgroundOpacity": 0,
 "width": "80%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "30%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container separator"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33",
 "backgroundOpacity": 0,
 "width": "10%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_rollover.png",
 "minHeight": 70,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "10%",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton right arrow"
 },
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "62.894%",
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "paddingBottom": 3,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.82vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.97vh;font-family:'Oswald';\"><B>CONTACT INFO</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.62vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#003300;font-size:2.62vh;font-family:'Oswald Regular';\"><B>Get in touch with us using the following contact details.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.47vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;font-family:'Oswald';\"><B>study@lorma.edu.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;font-family:'Oswald';\"><B>https://2020.lorma.edu/</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;font-family:'Oswald';\"><B>Tlf.: (072) 700 0000</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;font-family:'Oswald';\"><B>MacArthur Hwy, San Fernando, La Union</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.47vh;font-family:'Oswald';\"><B>National Highway, Ubiztondo 2514 San Juan, Philippines</B></SPAN></SPAN></DIV></div>",
 "paddingLeft": 10,
 "scrollBarColor": "#FF361B",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "maxHeight": 120,
 "maxWidth": 211,
 "id": "Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
 "backgroundOpacity": 0,
 "width": "70%",
 "borderRadius": 0,
 "url": "skin/Image_16B75461_1B87_4970_41B9_4F94F65FB1C1.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "height": "30%",
 "verticalAlign": "top",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image logo"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald Regular",
 "horizontalAlign": "center",
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_1830D20E_17B1_6AC3_4198_688BED36E073",
 "backgroundOpacity": 1,
 "width": 140,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#003300"
 ],
 "gap": 5,
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "click": "this.openLink('https://2020.lorma.edu/admissions/', '_blank')",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#006600"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 59,
 "fontSize": "2.83vh",
 "class": "Button",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "label": "ENROLL NOW",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
}],
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getKey": function(key){  return window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
