export const ContainerDecorator = storyFn => {
  return <div className='bg-off-white min-h-screen'>{storyFn()}</div>;
};
