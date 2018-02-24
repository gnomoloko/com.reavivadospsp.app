import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, ImageBackground, Linking} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AppLink from 'react-native-app-link';
import Hr from 'react-native-hr-component';
import styles from './styles.js';


export default class TelaInicial extends Component {

	projeto = "O nosso app foi desenvolvido para reforçar o propósito do projeto Reavivados por Sua Palavra, que foi criado em abril de 2012 com o objetivo de incentivar a leitura diária da Bíblia. \r\n\r\nPara motivar ainda mais a leitura, o projeto disponibiliza, além dos textos bíblicos, comentários explicativos sobre cada capítulo, escritos por colaboradores do projeto, e também vídeos e áudios explicativos que irão permitir que você tenha um entendimento completo sobre o capítulo abordado\r\n\r\nE você ainda pode compartilhar os conteúdos com amigos! Não deixe de baixar!\r\n\r\nPor não sermos profissionais na criação de aplicativos ele estará em constante atualização e qualquer crítica e sugestão podem ser enviadas que serão bem analisadas. O aplicativo está disponível apenas para o dispositivo Android.\r\n\r\nDeus chama a cada um para que saibamos todos os detalhes do Seu grande amor, do Seu perdão e nos convida para que ao viajarmos pelas páginas de Sua Santa Palavra sejamos Reavivados.\r\n\r\n";

	

	static navigationOptions = ({navigation}) => ({
        title: 'Voltar',
        headerStyle:{
            backgroundColor:'#d8d8d8',
            height: 25},
     });

	


    render() {
        return (
			<View style={styles.container}>
				<ImageBackground source={require('../img/bkg.jpg')} style={styles.bg}>
					<View style={styles.hwa_header_view}>
						<Image source={require('../img/logo_pb_GDbr.png')} style={styles.hwa_header_img}/>
					</View>	
					<ScrollView>
						<Text></Text>
						<Text style={styles.hwa_projeto_header}>O Projeto</Text>
						<Text style={styles.hwa_texto}>{this.projeto}</Text>
						<Text></Text>
						<Hr lineColor='#ff0000' />
						<Text></Text>
						<Text style={styles.hwa_projeto_header}>Nossa Equipe</Text>
						<Text style={styles.hwa_texto}>A equipe do projeto Reavivados Por Sua palavra é composta por:</Text>
						
						<Text style={styles.hwa_texto_autor}>• Pr. Jobson Santos</Text>
						<Text style={styles.hwa_texto_cidade}>Hortolândia - SP</Text>
						<Text style={styles.hwa_text_function}>Responsável pela tradução do Comentário Devocional</Text>
						<Hr lineColor="#eee" width={1} text="○" hrPadding={80}/>
						<Text style={styles.hwa_texto_autor}>• Pr. Heber Toth Armi</Text>
						<Text style={styles.hwa_texto_cidade}>Araquari - SC</Text>
						<Text style={styles.hwa_text_function}>Responsável pela redação de comentários</Text>
						<Hr lineColor="#eee" width={1} text="○" hrPadding={80}/>
						<Text style={styles.hwa_texto_autor}>• Jefferson Quimelli / Gisele Quimelli</Text>
						<Text style={styles.hwa_texto_cidade}>Ponta Grossa - PR</Text>
						<Text style={styles.hwa_text_function}>Responsáveis pelos Comentários Selecionados e tradução do Comentário Devocional</Text>
						<Hr lineColor="#eee" width={1} text="○" hrPadding={80}/>
						<Text style={styles.hwa_texto_autor}>• Rosana Garcia Barros / Ivan Barros</Text>
						<Text style={styles.hwa_texto_cidade}>Maceió – AL</Text>
						<Text style={styles.hwa_text_function}>Responsável pela redação de comentários</Text>
						<Hr lineColor="#eee" width={1} text="○" hrPadding={80}/>
						<Text style={styles.hwa_texto_autor}>• Maria Carolina Juliano</Text>
						<Text style={styles.hwa_texto_cidade}>Curitiba - PR</Text>
						<Text style={styles.hwa_text_function}>Responsável pela redação de comentários</Text>
						<Hr lineColor="#eee" width={1} text="○" hrPadding={80}/>
						<Text style={styles.hwa_texto_autor}>• Maria Eduarda C. Hilário</Text>
						<Text style={styles.hwa_texto_cidade}>Resende – RJ</Text>
						<Text style={styles.hwa_text_function}>Responsável pela administração e geração de conteúdo nas redes sociais</Text>
						<Hr lineColor="#eee" width={1} text="○" hrPadding={80}/>
						<Text style={styles.hwa_texto}>E ainda contamos com  os conteúdos audiovisuais desenvolvidos pelas equipes de:</Text>
						<Text style={styles.hwa_texto_autor}>• Pr. Adolfo Suárez</Text>
						<Text style={styles.hwa_text_function}>Vídeos diários</Text>
						<Hr lineColor="#eee" width={1} text="○" hrPadding={80}/>
						<Text style={styles.hwa_texto_autor}>• Pr. Weverton Castro</Text>
						<Text style={styles.hwa_text_function}>Animações em vídeo</Text>
						<Hr lineColor="#eee" width={1} text="○" hrPadding={80}/>
						<Text style={styles.hwa_texto_autor}>• Pr. Valdeci Junior</Text>
						<Text style={styles.hwa_text_function}>Áudios diários</Text>
						<Text></Text>
						<Text></Text>
						
			
						<Hr lineColor='#ff0000' />
						<Text></Text>
						<Text style={styles.hwa_projeto_header}>Siga-nos nas redes sociais</Text>
						<Text></Text>
						<View style={styles.hwa_socialIcons_container}>
							<View style={styles.hwa_socialIcons}>
								<TouchableOpacity onPress={()=>{Linking.openURL("https://m.facebook.com/reavivadosporsuapalavra")}}>
									<Image source={require('../img/face.jpg')} style={styles.hwa_image_social_icon}/>
								</TouchableOpacity>
							</View>
							<View style={styles.hwa_socialIcons}>
								<TouchableOpacity onPress={()=>{Linking.openURL("http://www.twitter.com/reavivados1")}}>
									<Image source={require('../img/twitter.jpg')}style={styles.hwa_image_social_icon}/>
								</TouchableOpacity>
							</View>							
							<View style={styles.hwa_socialIcons}>
								<TouchableOpacity  onPress={()=>{Linking.openURL("http://www.instagram.com/reavivadospsp")}}>
									<Image source={require('../img/instagram.jpg')}style={styles.hwa_image_social_icon}/>	
								</TouchableOpacity>
								</View>
							<View style={styles.hwa_socialIcons}>
								<TouchableOpacity  onPress={()=>{Linking.openURL("http://www.youtube.com/c/Reavivadosporsuapalavra-rpsp")}}>
									<Image source={require('../img/youtube.jpg')}style={styles.hwa_image_social_icon}/>	
								</TouchableOpacity>
							</View>
							<View style={styles.hwa_socialIcons}>
								<TouchableOpacity onPress={()=>{Linking.openURL("http://www.reavivadosporsuapalavra.org")}}>
									<Image source={require('../img/blog.jpg')}style={styles.hwa_image_social_icon}/>
								</TouchableOpacity>
							</View>
						</View>
						<View>
						<Text></Text>
						<Text></Text>
						<Hr lineColor='#ff0000'/>
							<Text></Text>
							<Text style={styles.hwa_projeto_header}>Contato</Text>
						</View>

						<View>
							<Text style={styles.hwa_texto}>E-mail: reavivadospsp@gmail.com</Text>
							<Text></Text>
							<Text style={styles.hwa_texto}>Desenvolvido por: Marcelo Hilario (24) 98162-5598</Text> 
							<Hr lineColor="#eee" width={1} text="○" hrPadding={80}/>
						</View>


					</ScrollView>
												
					
			
				</ImageBackground>
			</View >
            
        )
    }
}