import React from 'react'

export default function HomeTemplate() {
  const {path, exact, component} = this.props;
  return (
    <Route path={path} exact={exact} component={component}/>
  )
}

