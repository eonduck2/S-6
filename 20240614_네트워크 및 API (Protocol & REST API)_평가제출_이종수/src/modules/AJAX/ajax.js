/**
 * @eonduck2
 * @param {String} resource 요청 api의 자원
 * * @param {Number} rowNum id 값으로 검색, 전달된 값 없을 시, 전체 리스트 조회
 */
export default (resource, rowNum) => {
  const url = `https://jsonplaceholder.typicode.com/${resource}/${
    rowNum ?? ""
  }`;

  const xhr = new XMLHttpRequest();
  xhr.open(`GET`, url, true);

  xhr.addEventListener(`load`, () => {
    if (xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      console.log(result);
      return result;
    }
  });
  xhr.send();
};
