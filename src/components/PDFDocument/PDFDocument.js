import React from "react";
import styled from "styled-components";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const StyledView = styled(View)`
  background-image: ${(props) => (props.image ? `url(${props.image})` : "")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  width: 100%;
`;

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
    fontFamily: "Roboto",
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Roboto",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Roboto",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    width: "auto",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    fontFamily: "Roboto",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// Create Document Component
const PDFDocument = ({
  createdAt,
  author,
  perception,
  reception,
  production,
}) => {
  var opitionView = (
    <View>
      <Text style={styles.subtitle}>Opinia weryfikującego:</Text>
      <Text style={styles.text}>
        ......................................................................................................................
      </Text>
      <Text style={styles.text}>
        ......................................................................................................................
      </Text>
      <Text style={styles.text}>
        ......................................................................................................................
      </Text>
      <Text style={styles.text}>
        ......................................................................................................................
      </Text>
      <Text style={styles.text}>
        ......................................................................................................................
      </Text>
      <Text style={styles.text}>
        ......................................................................................................................
      </Text>
    </View>
  );

  if (perception) {
    var perceptionView = Object.keys(perception).map(function (key, index) {
      var img = document.createElement("img");
      img.src = perception[key].file;

      var perceptionAnswersView = perception[key].answers.map((item, index) => (
        <Text key={index} style={styles.text}>
          {item.answer} - {item.value ? "Poprawne" : "Niepoprawne"}
        </Text>
      ));

      return (
        <View key={key}>
          <Text style={styles.subtitle}> Zadanie nr {index + 1}</Text>
          <Image
            src={{
              uri: img.src,
              method: "GET",
              headers: { "Access-Control-Allow-Origin": "*" },
            }}
            style={styles.image}
          />
          <Text style={styles.text}>Wskazane spostrzeżenia:</Text>
          {perceptionAnswersView}
          {opitionView}
        </View>
      );
    });
  }
  if (reception) {
    var receptionView = Object.keys(reception).map(function (key, index) {
      var img = document.createElement("img");
      img.src = reception[key].file;

      return (
        <View key={key}>
          <Text style={styles.subtitle}> Zadanie nr {index + 1}</Text>
          <Image
            src={{
              uri: img.src,
              method: "GET",
              headers: { "Access-Control-Allow-Origin": "*" },
            }}
            style={styles.image}
          />
          <Text style={styles.text}>Wskazane znaczenie semantyczne:</Text>
          <Text style={styles.text}>{reception[key].answer}</Text>

          {opitionView}
        </View>
      );
    });
  }
  if (production) {
    var productionView = Object.keys(production).map(function (key, index) {
      var img = document.createElement("img");
      img.src = production[key].file;

      return (
        <View key={key}>
          <Text style={styles.subtitle}> Zadanie nr {index + 1}</Text>
          <Image
            src={{
              uri: img.src,
              method: "GET",
              headers: { "Access-Control-Allow-Origin": "*" },
            }}
            style={styles.image}
          />
          <Text style={styles.text}>Wizualizacja dla hasła:</Text>
          <Text style={styles.text}>{production[key].name}</Text>
          {opitionView}
        </View>
      );
    });
  }

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          ~ System wspomagania diagnozy kompetencji wizualnych | Dawid Biernat ~
        </Text>
        <Text style={styles.title}>Test wspomagajacy diagnoze </Text>
        <Text style={styles.title}>rozwoju kompetencji wizualnych</Text>
        <Text style={styles.author}>
          Zrealizowany w dniu: {createdAt}, przez: {author}
        </Text>
        <Text style={styles.subtitle}>Percepcja wizualna</Text>
        {perceptionView}
        <Text break style={styles.subtitle}>
          Kreowanie wizualne
        </Text>
        {productionView}
        <Text break style={styles.subtitle}>
          Odczyt wizualny
        </Text>
        {receptionView}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default PDFDocument;
