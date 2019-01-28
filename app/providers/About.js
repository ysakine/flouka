import React, { Component } from 'react';
import { Text, StyleSheet, Image, View, ScrollView } from 'react-native';
import { Icon, SocialIcon, Divider } from 'react-native-elements'

export default class About extends React.Component {
	render() {
		return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <View style={{justifyContent: 'center'}}>
              <Image source={require('../assets/images/logo-white.png')} style={{ width: 300, height: 300 }}/>
      </View>
      <View>
        <Text style={styles.title}>
          راديو فلوكة
        </Text>
      </View>
      <View>
        <Text style={styles.text}>

راديو فلوكة هو مشروع نتج عن نقاشات استغرقتْ سنتيْن بين مجموعة من الأصدقاء مقيمين بالمهجر. غرضها الأساسي التعريف بالفن البديل والثقافة المقاومة في تونس وشمال إفريقيا والعالم العربي، وهو أيضاً مفتوح على ثقافات العالم المغردة خارج فلك السائد والمهيمن. بيد أنه أيضاً وسيلة إعلامية تروم الخوض في المشاكل الإجتماعية والسياسية التي تهم جيلنا من الشباب وإبتداع خطاب جديد، خلاَّق، يحلّ محل اللسان الخشبي الذي يُميّز وسائل الإعلام "الكلاسيكية". بإمكانيات بسيطة، نبدأ. ذلك أننا كثيراً ما اصطدمنا بعائق الإمكانيات المادية واللوجستية، وكثيراً ما أرجأنا إطلاق المشروع (شأننا في ذلك شأن الكثير من الشباب الذين يحملون أفكاراً ومشاريع وإرادةً تُحبطها الإمكانيات الضئيلة أو المنعدمة). إلى أن قررنا أن نطلق المشروع كما هو، كما نحن، بما هو متاح من زهيد الإمكانات. وصلنا إلى الإقرار بأن: المهم أن ينطلق المشروع، وليتطور شيئاً فشيئاً فيما بعد. 
الفكرة مازالت قيد البلورة، وهي مفتوحة على كل الإقتراحات والإسهامات سواء فيما يتعلق بالمواد التي سنبثها أو حتى بسياسة الراديو العامة. مرحبا بكل الأفكار على متن "الفلوكة". هذا عنوان مايل الراديو لكل من يبتغي أن يُرسل موسيقى، مواد أو تسجيلات صوتية (تعريف بحراك إجتماعي، قراءات، شعر، تسجيلات من شوارع وأحياء، حوارات، تقديم ﻷفلام، مسرحيات، أعمال فنية أخرى، أو تسجيل لبرنامج من إقتراحكم، إلخ)، أو للموسيقيين الشباب، هوات أو مبتدئين أو خارج قنوات البث الكلاسيكية، ممن يريدون بث أعمالهم على أمواج الراديو، وغيره مما ستقترحون:
radioflouka@gmail.com
راديو فلوكة هو قاربٌ أشرعته الثقافة المقاومة، ريحه الدافعة إسهامات مستمعيه، وأفقه نخلقه معاً.






        </Text>
      </View>

      <View style={{flexDirection: 'row', flex: 1, paddingTop: 30}}>
        <SocialIcon type='twitter'/>
        <SocialIcon type='facebook'/>
        <SocialIcon type='soundcloud'/>
        <SocialIcon type='instagram'/>
        <Icon name='web' reverse raised onPress={() => console.log('hello')}/>
        <Icon name='mail' reverse raised onPress={() => console.log('hello')}/>
      </View>

    </View>
    </ScrollView>
		);
	}
}




  const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  text: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
    title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#777'
  },
  text: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777',
    textAlign: 'center'
  },
  });