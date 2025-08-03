// Fungsi untuk mengambil data JSON dari /index.json
async function fetchData() {
  console.log('fetchData: Attempting to fetch /index.json');
  try {
    const response = await fetch('/index.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('fetchData: Successfully fetched JSON', data);
    return data;
  } catch (error) {
    console.error('fetchData: Gagal mengambil JSON:', error);
    return [];
  }
}

// Fungsi untuk mencari berdasarkan kata kunci
async function cariCatatan(query) {
  console.log('cariCatatan: Searching for query:', query);
  const data = await fetchData();
  const results = data.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.summary.toLowerCase().includes(query.toLowerCase())
  );
  console.log('cariCatatan: Found results:', results);
  return results.map(item => ({
    title: item.title,
    url: item.url,
    summary: item.summary
  }));
}

// Fungsi untuk menampilkan hasil pencarian
async function showResults(query) {
  console.log('showResults: Displaying results for query:', query);
  const resultContainer = document.getElementById('search-results');
  
  if (!resultContainer) {
    console.error('showResults: search-results container not found!');
    return;
  }

  // Jika kueri kosong, hapus hasil pencarian
  if (!query.trim()) {
    resultContainer.innerHTML = '';
    console.log('showResults: Query is empty, clearing results.');
    return;
  }

  const results = await cariCatatan(query);
  
  // Jika tidak ada hasil
  if (results.length === 0) {
    resultContainer.innerHTML = '<p class="text-gray-600 text-center">No results found.</p>';
    console.log('showResults: No results found for query.');
    return;
  }
  
  // Menampilkan hasil title, url dan summary
  resultContainer.innerHTML = results.map(item => 
    `<div class="bg-gray-50 p-4 rounded-lg shadow-sm">
      <a href="${item.url}" class="text-xl font-semibold text-blue-600 hover:underline">${item.title}</a>
      <p class="text-gray-700 mt-2">${item.summary}</p>
    </div>`
  ).join('');
  console.log('showResults: Results rendered.');
}

// Event listener untuk input pencarian
document.addEventListener('DOMContentLoaded', function() {
  console.log('cari.js: DOMContentLoaded fired.');
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    console.log('cari.js: searchInput found.');
    searchInput.addEventListener('input', (e) => {
      console.log('cari.js: Input event detected. Value:', e.target.value);
      showResults(e.target.value);
    });
  } else {
    console.error('cari.js: searchInput not found!');
  }
});