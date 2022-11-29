function getComp() {
  return (
    <div>
      <div autoFocus />
      <div autoFocus="true" />
      <div autoFocus="false" />
      <div autoFocus={undefined} />
    </div>
  )
}

getComp()

console.log('a')
