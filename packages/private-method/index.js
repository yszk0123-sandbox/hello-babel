import React from 'react'

export default class Component extends React.Component {
  publicMethodA() {
    return 'this is public'
  }

  publicMethodB() {
    return 'this is public'
  }

  _privateMethodA() {
    return 'this is private'
  }

  _privateMethodB() {
    return 'this is private'
  }
}
