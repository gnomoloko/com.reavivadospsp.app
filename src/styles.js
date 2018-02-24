import {StyleSheet} from 'react-native';

export default StyleSheet.create({

container:{
    flex: 1,
    flexDirection:'column',
    },

bg: {
    flex: 1,
    width: null,
    height: null,
    },

customFont: {
    fontFamily: 'Roboto Light',
    color: '#fff',
    textAlign: 'center'
    },

navIcons: {
    flex:1,
    flexDirection:'row'
    },

buttonNav:{
    flex:1,    
    justifyContent: 'center',
    alignItems: 'center',
    },

iconImg: {
    height: 110,
    width: 220,
    },

listaLivros:{
    flex:3, 
    flexDirection:'row',  
  },
  
navTitle: {
    flex: 1,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#ffffff",
    marginTop:5,
    marginLeft:100,
    marginRight: 100,
    backgroundColor: "#1973af"  
}, 

navTxt: {
    textAlign: 'center',
    color: '#fff',
    //fontSize: 16,
    fontFamily: 'Roboto Light'
},

tab_icon: {
    width:24,
    height:24
},

chapterHead: {
    flex:5,	
	backgroundColor: 'rgba(25, 115, 175, 0.4)',
    height: 30,
   	borderRadius: 10,
    borderWidth: 2,
    marginTop:5,
    marginLeft:5,
    marginRight: 5,
    marginBottom:5,
    borderWidth: 2.5,
    borderColor: "#1973af",
    alignItems: 'center',
    
    
},

homeIcon: {	
    flex: 1,
	
	backgroundColor: 'rgba(25, 115, 175, 0.4)',
	height: 30,
   	borderRadius: 10,
    borderWidth: 2,
    marginTop:5,
    marginLeft:5,
    marginRight: 5,
    marginBottom:5,
    borderWidth: 2.5,
    borderColor: "#1973af",
    alignItems: 'center',

    
},

txtLine: {
    marginLeft: 10,
    textAlign: 'left',
},


txtVerse: {
    color: "#ff0000",
  //  fontSize: 14,
    fontFamily: 'Roboto Regular',
    textAlign: 'left',
    },
  
  texto: {
  color: "#000000",
 // fontSize: 14,
  fontFamily: 'Roboto Light',
  textAlign: 'left',
  },
  
  txtHeader: {
  color: "#000000",
  fontSize: 16,
  fontFamily: 'Roboto Regular',
  textAlign: 'center',
  },

//TabComentarios
  texto_comment: {
    color: "#000000",
   fontSize: 14,
    fontFamily: 'Roboto Light',
    textAlign: 'left',
    marginLeft: 10,
    padding: 10,
    },

textoTitle: {
    color: "red",
    marginLeft: 30,
    fontSize: 24,
    fontFamily: 'Roboto Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    },

buttonShare: {

    borderRadius: 12,
    borderWidth: 2,
    marginTop:5,
    marginLeft:50,
    marginBottom:10,
    marginRight: 50,
    backgroundColor: 'rgba(229, 185, 11, 0.4)',
    borderWidth: 1.5,
    borderColor: "#fff",
    flexDirection: 'row'    
    },   

buttonShareText: {
    flex:1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'darkblue',
    fontSize: 18,
    fontFamily: 'Roboto',    
    },

    //TabVideos

containervideo:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:8       
 },

 textoAuthorVideo: {
	flex:1, 
	flexDirection:'row',
	color: "darkblue",
	marginLeft: 30,
	marginRight: 30,
	fontSize: 22,
	fontFamily: 'Roboto Bold',
	textAlign: 'center',
},

logoImg: {	
	marginBottom: 15,
	justifyContent: 'center',
    alignItems: 'center'  
  },

  boxVideo: {
	flex: 1,
	borderRadius: 12,
	borderWidth: 2,
	marginTop:5,
	marginLeft:30,
	marginBottom:10,
	marginRight: 30,
	borderWidth: 1.5,
	borderColor: "#fff",
	flexDirection: 'column',
	height: 180,
	
}, 

textoVideoAuthor: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
textoVideoBook: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,

  },

  //TabAudios
  button: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    //color: 'darkblue',
    justifyContent: 'center',
    alignItems: 'center'  

  },
  slider: {
    height: 10,
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'darkblue',
    textAlign: 'center',
    padding: 20,
  },
  errorMessage: {

    textAlign: 'center',
    padding: 20,
    color: 'red'
  },

  boxAudio: {
	flex: 1,
	borderRadius: 12,
	borderWidth: 2,
	marginTop:5,
	marginLeft:30,
	marginBottom:10,
	marginRight: 30,
	borderWidth: 1.5,
	borderColor: "#fff",
	flexDirection: 'column',
 
}, 

audioHeader: {
    flex:1,
    flexDirection: 'column',
    marginTop: 5,

},

logoImgAudio: {	
 	marginTop: 40,
	justifyContent: 'center',
    alignItems: 'center',
    height: 150
  },

audioHeaderText: {
justifyContent: 'center',
alignItems: 'center'  
},

audioIcons: {
flex:1,
flexDirection:'row',
justifyContent: 'center',
alignItems: 'center'  
},

chargeAudio: {
    fontSize: 14,
    color: '#ff0000',
    textAlign: 'center',
    marginTop:15
    },

barAnimator: {
    height: 40,
    marginTop:50,
    flex: 1,
    flexDirection: "column"
},

hwa_header_view:{
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
    backgroundColor:"#000"
},

hwa_projeto_header: {
 
    color:'darkblue',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
   
},
hwa_header_img:{ 
    flex: 1,
    width: null,
    height: 60,
    resizeMode: 'contain'
   
},
hwa_texto:{
    color: "#000",
    fontSize: 12,
    margin: 5,
},
hwa_texto_autor:{
    color: "#000",
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "bold",
},
hwa_texto_cidade: {
    fontSize: 10,
    fontStyle: 'italic',
    color:'#1e7200',
    marginLeft:14,
},
hwa_text_function: {
    fontSize:12,
    color: '#000',
    marginLeft: 12,

},

hwa_socialIcons_container: {
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center"

},

hwa_socialIcons: {
    flex: 1,
    width: null,
    height: 40,
  
},

hwa_image_social_icon: {
    width: null,
    height: 40,
    resizeMode: 'contain'
}


});