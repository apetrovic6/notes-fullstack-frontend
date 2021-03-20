import React, { Fragment, useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { useRouter } from "next/router";
import { Link } from "next/link";
import axios from "axios";
const CardComponent = ({ items }) => {
  if (!items.length === 0) {
    return <div> Loading</div>;
  }
  return items.map((item) => (
    <Card key={item._id} href={`/Notes/${item._id}`} raised>
      <Card.Content>
        <Card.Header content={item.title} />
        <Card.Description content={item.content} />
      </Card.Content>
    </Card>
  ));
};

export default CardComponent;
