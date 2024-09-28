
/** 
 * Граф
 */
class Graph {
    /** 
     * Создать новый граф
     * @param {any[]} [vertices=[]] Вершины графа. Массив произвольных объектов, которые будут являться вершинами. Повторяющиеся объекты будут исключены.
     * @param {any[][]} [edges=[]] Ребра графа. Массив кортежей (двумерных массивов), где элементы являются вершинами графа. Для каждого кортежа будет построено ребро от первой вершины ко второй. 
     * @param {boolean} [directed=true] Ориентированность графа. Значение true делает граф ориентированным.
     */
    constructor(vertices = [], edges = [], directed = true) {
        this.Directed = directed;

        this.Vertices = [];
        this.add_vertices(vertices);
        this.Edges = [];
        this.add_edges(edges);
    }

    /**
     * Добавить вершину в граф
     * @param {any} vertex Вершина (произвольный объект) для добавления в граф
     */
    add_vertex(vertex) {
        if (!this.Vertices.includes(vertex)) {
            this.Vertices.push(vertex);
        }
    }

    /**
     * Добавить вершины в граф
     * @param {any[]} vertices Вершины (массив произвольных объектов) для добавления в граф
     */
    add_vertices(vertices) {
        for (const vertex of vertices) {
            this.add_vertex(vertex);
        }
    }

    /**
     * Добавить ребро в граф
     * @param {any[]} edge Ребро для добавления в граф. Кортеж (массив двух объектов) вершин графа. Ребро будет построено от первой вершины до второй.
     */
    add_edge(edge) {
        if (edge.length != 2) {
            throw new Error("Invalid data format");
        }
        if (!this.Vertices.includes(edge[0]) || !this.Vertices.includes(edge[1])) {
            throw new Error("Non-existent vertex");
        }
        if (!this.Edges.includes(edge)) {
            this.Edges.push(edge);
        }
        if (!this.Directed) {
            if (!this.Edges.includes([edge[1], edge[0]])) {
                this.Edges.push([edge[1], edge[0]]);
            }
        }
    }

    /**
     * Добавить ребра в граф
     * @param {any[][]} edges Ребра для добавления в граф. Массив кортежей (массивов двух объектов), где элементы являются вершинами графа. Для каждого кортежа будет построено ребро от первой вершины ко второй. 
     */
    add_edges(edges = []) {
        for (const edge of edges) {
            this.add_edge(edge);
        }
    }
}