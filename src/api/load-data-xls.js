import * as XLSX from 'xlsx';

export async function loadXLSData() {
  try {
    const excelUrl = `${process.env.PUBLIC_URL}/data.xlsx`;
    const response = await fetch(excelUrl);
    
    if (!response.ok) {
      throw new Error(`Файл не найден: ${excelUrl}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const records = XLSX.utils.sheet_to_json(worksheet);

    const processedData = records.map((item) => ({
      name: item.name || '',
      category: item.category || '',
      tags: item.tags
        ? String(item.tags)
            .split(' ')
            .map((tag) => tag.trim())
            .filter((tag) => tag !== '')
        : [],
    }));
    return processedData;
  } catch (error) {
    console.error("Error loading Excel:", error);
    return [];
  }
}