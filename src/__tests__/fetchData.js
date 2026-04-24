import { getLevel } from '../fetchData';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
	jest.resetAllMocks();
});

test('возвращает уровень при успешном ответе', () => {
	fetchData.mockReturnValue({
		status: 'ok',
		level: 42,
	});

	const result = getLevel(1);
	expect(result).toBe('Ваш текущий уровень: 42');
	expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});

test('возвращает сообщение о недоступности, если статус не "ok"', () => {
	fetchData.mockReturnValue({
		status: 'error',
		level: null,
	});

	const result = getLevel(5);
	expect(result).toBe('Информация об уровне временно недоступна');
	expect(fetchData).toHaveBeenCalledWith('https://server/user/5');
});

test('возвращает сообщение о недоступности, если fetchData выбрасывает ошибку', () => {
	fetchData.mockImplementation(() => {
		throw new Error('Network error');
	});

	const result = getLevel(10);
	expect(result).toBe('Информация об уровне временно недоступна');
	expect(fetchData).toHaveBeenCalledWith('https://server/user/10');
});
