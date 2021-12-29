// 액션생성
const actionTypeCreator = function (prefix: string, types: string[] = []) {
  let actions: { [key: string]: string } = {};
  types.forEach((type) => {
    actions[type] = `${prefix}/${type}`;
  });

  return actions;
};

const actionTypes = {
  QUIZ: actionTypeCreator('quiz', ['SET_QUIZ']),
};

export default actionTypes;
