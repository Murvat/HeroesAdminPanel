export interface Hero {
  id: string;
  name: string;
  description: string;
  element: string;
}

export interface Filter{
  id: string,
  name: string,
  label: string,
  className: string,
}

export interface AppData {
  heroes: Hero[];
  filters: Filter[];
};
export const useHttp = () => {

    const request = async<T>(
        url: string, method: string = 'GET',
        body = null, headers = { 'Content-Type': 'application/json' }
    ): Promise<T> => {

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data:T = await response.json();

            return data;
        } catch(e) {
            throw e;
        }
    };

    return {request}
}