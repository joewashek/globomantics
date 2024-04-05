const LoadingIndicator = (payload:any) => {
  return <h3 style={{marginTop: "150px"}}>{payload.loadingState}</h3>;
}

export default LoadingIndicator;