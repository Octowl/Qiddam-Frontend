import { StyleSheet } from "react-native";

const resizeMode = "center";

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "green",
    alignItems: "flex-start"
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 25
  },
  text: {
    marginBottom: 5,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  memberImage: {
    height: 30,
    width: 30,

    marginRight: 4,
    borderRadius: 10,
    borderWidth: 1
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  countMembers: {
    color: "#20B2AA"
  },
  timeAgo: {
    fontSize: 12,
    color: "#696969"
  },
  groupName: {
    fontSize: 23,
    color: "#1E90FF"
  },
  groupMembersContent: {
    flexDirection: "row",
    marginTop: 10
  },
  header: {
    padding: 30,
    alignItems: "center",
    backgroundColor: "#7588AC",

    width: 300,
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 35,
    borderWidth: 3
  },

  headerTitle: {
    fontSize: 30,
    color: "#FFFFFF",
    marginTop: 10,
    textAlign: "center"
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  postContent: {
    flex: 1,
    padding: 30,
    backgroundColor: "#bad6dd",
    alignSelf: "center",
    width: 300,
    borderRadius: 35,
    marginTop: 20
  },
  postTitle: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "right"
  },
  postDescription: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "right"
  },
  tags: {
    color: "#C75D7A",
    marginTop: 10,
    textAlign: "right"
  },
  date: {
    color: "#696969",
    marginTop: 10,
    textAlign: "right",
    alignSelf: "center"
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#474a4f",
    marginLeft: 3,
    marginTop: 3,
    marginBottom: 3
  },
  profile: {
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 25
  },

  containerD: {
    flex: 1,
    backgroundColor: "#FDFAF3"
  },
  name: {
    fontSize: 22,
    color: "#C75D7A",
    fontWeight: "600",
    alignSelf: "center",
    marginLeft: 10
  },
  shareButton: {
    marginTop: 50,
    height: 50,
    width: 100,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#f9b384",
    alignSelf: "center"
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20
  },
  qiddam: {
    width: 100,
    height: 80
  },
  pageView: {
    flex: 1,
    resizeMode,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#FDFAF3"
  },
  categoryList: {
    flexGrow: 1,

    marginTop: 10,
    marginBottom: 10,
    height: 164,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#FDB62B"
  },
  background: {
    backgroundColor: "black",
    width: null,
    flex: 1
  },
  titleCategory: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center"
  }
});

export default styles;
