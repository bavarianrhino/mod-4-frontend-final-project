import React, { Component } from "react";
import { Segment, Form, Grid, Card, Image } from "semantic-ui-react";

class CarStats extends Component {

  render() {
      const { car, stats, handleChange, handleDoubleClick } = this.props
    return (
      <Segment as={Form} id="car-stats-form">
        <Grid columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Image
                    size="tiny"
                    src={require(`../images/cars${car.right}`)}
                    style={{ width: "75%" }}
                  />
                </Card.Content>
                <Card.Content>
                  <Card.Header style={{ "fontSize": "1.035em" }}>
                    <strong>{car.name}</strong>
                  </Card.Header>
                  <Card.Description>
                    <p>
                      <strong>Fuel:</strong>
                    </p>
                    <p>
                      <strong>Tread:</strong>
                    </p>
                    <p>
                      <strong>Health:</strong>
                    </p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Form.Input
                label={`Max Fuel: ${stats.max_fuel}`}
                name="max_fuel"
                type="range"
                min={0}
                max={100}
                value={stats.max_fuel}
                onChange={handleChange}
                onDoubleClick={handleDoubleClick}
              />
              <Form.Input
                label={`Tread Wear: ${stats.tread_wear}`}
                name="tread_wear"
                type="range"
                min={0}
                max={100}
                value={stats.tread_wear}
                onChange={handleChange}
                onDoubleClick={handleDoubleClick}
              />
              <Form.Input
                label={`Health: ${stats.health}`}
                name="health"
                type="range"
                min={0}
                max={100}
                value={stats.health}
                onChange={handleChange}
                onDoubleClick={handleDoubleClick}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default CarStats;
/* <Image
  centered
  src={require(`../images/cars${car.right}`)}
  style={{ width: "75%" }}
/>; */
