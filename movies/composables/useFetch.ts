import { reactive, toRefs } from 'vue'

export default function useFetch(url : string) {
  const state = reactive({
    data: null,
    error: null,
    loading: true
  })

  fetch(url)
    .then(response => response.json())
    .then(data => {
      state.data = data.results
      state.loading = false
    })
    .catch(error => {
      state.error = error
      state.loading = false
    })

  return toRefs(state)
}
