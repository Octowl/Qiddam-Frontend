import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, Text } from "react-native";
import TimePicker from "react-native-24h-timepicker";
import * as actionCreators from "../../store/actions";

import {
  Container,
  Content,
  InputGroup,
  Input,
  Icon,
  Header,
  List,
  ListItem,
  Body,
  Form,
  Item,
  Button,
  DatePicker,
  ActionSheet,
  Root
} from "native-base";
const BUTTONS = [
  this.props.categories.map(category => ({
    text: category.title,
    icon: "analytics",
    iconColor: "#f42ced"
  }))
];

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class ActivityCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  state = {
    title: "",
    description: "",
    category: "",
    gender: "",
    location: "",
    number_of_people: "",
    date: "",
    time: ""
  };

  componentDidMount() {
    this.props.fetchCatogries();
  }

  render() {
    return (
      <Root>
        <Content>
          <Header transparent />
          <List>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Body>
                <Form>
                  <Item
                    rounded
                    style={{
                      backgroundColor: "white",
                      marginTop: 10,
                      marginBottom: 10
                    }}
                  >
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={title => this.setState({ title })}
                      placeholder="title"
                    />
                  </Item>
                  <Item
                    rounded
                    style={{
                      backgroundColor: "white",
                      marginTop: 10,
                      marginBottom: 10
                    }}
                  >
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={description =>
                        this.setState({ description })
                      }
                      placeholder="description"
                    />
                  </Item>
                  <Content padder>
                    {/* <Button
                      onPress={() =>
                        ActionSheet.show(
                          {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: "Testing ActionSheet"
                          },
                          category => {
                            this.setState({ clicked: BUTTONS[category] });
                          }
                        )
                      }
                    >
                      <Text>Category</Text>
                    </Button> */}
                  </Content>
                  <Content padder>
                    <Button
                      onPress={() =>
                        ActionSheet.show(
                          {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: "Testing ActionSheet"
                          },
                          gender => {
                            this.setState({ clicked: BUTTONS[gender] });
                          }
                        )
                      }
                    >
                      <Text>Gender</Text>
                    </Button>
                  </Content>
                  <Item
                    rounded
                    style={{
                      backgroundColor: "white",
                      marginTop: 10,
                      marginBottom: 10
                    }}
                  >
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={location => this.setState({ location })}
                      placeholder="location"
                    />
                  </Item>
                  <Item
                    rounded
                    style={{
                      backgroundColor: "white",
                      marginTop: 10,
                      marginBottom: 10
                    }}
                  >
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={number_of_people =>
                        this.setState({ number_of_people })
                      }
                      placeholder="كم عدد المعازيم؟"
                    />
                  </Item>

                  <DatePicker
                    defaultDate={new Date(2019, 4, 4)}
                    minimumDate={new Date(2019, 1, 1)}
                    maximumDate={new Date(2019, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                  />
                  <Text>
                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                  </Text>

                  <View>
                    <TouchableOpacity onPress={() => this.TimePicker.open()}>
                      <Text>TIMEPICKER</Text>
                    </TouchableOpacity>
                    <Text>{this.state.time}</Text>
                    <TimePicker
                      ref={ref => {
                        this.TimePicker = ref;
                      }}
                      onCancel={() => this.onCancel()}
                      onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                    />
                  </View>
                </Form>
              </Body>
            </ListItem>
            <Button
              full
              onPress={() =>
                this.props.createActivity(this.state, this.props.navigation)
              }
              style={{ backgroundColor: "rgb(155, 166, 87)" }}
            >
              <Text>انشر الدعوة</Text>
            </Button>
          </List>
        </Content>
      </Root>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.activityReducer.categories
  };
};
const mapDispatchToProps = dispatch => ({
  createActivity: (activityData, navigation) =>
    dispatch(actionCreators.createActivity(activityData, navigation)),
  fetchCatogries: () => dispatch(actionCreators.fetchCatogries())
});
export default connect(
  null,
  mapDispatchToProps
)(ActivityCreateForm);
