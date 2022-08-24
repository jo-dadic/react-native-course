import { Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
});
