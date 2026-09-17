const API_URL = "https://localhost:7101/api";

interface Cliente {
    id: number;
    nombre: string;
    email: string;
    telefono: string | null;
    fechaAlta: string;
    pedidos: Pedido[];
}

interface Pedido {
    id: number;
    fecha: string;
    total: number;
    estado: string;
    clienteId: number;
}

const form = document.getElementById("cliente-form") as HTMLFormElement;
const tbody = document.getElementById("clientes-tbody") as HTMLTableSectionElement;

async function cargarClientes(): Promise<void> {
    const response = await fetch(`${API_URL}/Cliente`);
    const clientes: Cliente[] = await response.json();

    tbody.innerHTML = "";

    clientes.forEach((cliente) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
      <td>${cliente.id}</td>
      <td>${cliente.nombre}</td>
      <td>${cliente.email}</td>
      <td>${cliente.telefono ?? "-"}</td>
      <td>${cliente.pedidos?.length ?? 0}</td>
    `;
        tbody.appendChild(fila);
    });
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const telefono = (document.getElementById("telefono") as HTMLInputElement).value;

    const nuevoCliente = {
        id: 0,
        nombre,
        email,
        telefono: telefono || null,
        fechaAlta: new Date().toISOString(),
        pedidos: [],
    };

    await fetch(`${API_URL}/Cliente`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoCliente),
    });

    form.reset();
    await cargarClientes();
});

cargarClientes();
import './style.css'