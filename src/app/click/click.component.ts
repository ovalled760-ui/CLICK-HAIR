import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-click',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class clickcomponent {
  productos = [
    {
      nombre: "SHAMPOO CLICK",
      descripcion: "Espuma lujosa y suave que limpia sin resecar mientras potencia la nutrición y el brillo. Con alta concentración de vitaminas las cuales devuelven la luminosidad y vitalidad a la fibra, es ideal para cabellos tratados químicamente ya que no contiene sal ni parabenos, no afecta estos procedimientos, limpiando suavemente mientras nutre el cabello maltratado y seco debido a su fusión con aceite de argán y aminoácidos que ayudan a mantener el cuero cabelludo sano, una hebra con un brillo deslumbrante y una suavidad aterciopelada.",
      imagen: "https://prettyfaceyz.com/wp-content/uploads/2025/06/PAGINA-WEB-15.png",
      likes: 0,
      comentarios: []
    },
    {
      nombre: "PERFUME CAPILAR CLICK",
      descripcion: "Tu cabello oliendo delicioso con nuestro perfume por más de 24 horas.  7 deliciosos aromas que te harán sentir hermosa, fresca y sexy todo el día.",
      imagen: "https://tiendasmartina.com/cdn/shop/files/PIEZA4_53ae7ebf-0a90-4f68-86b8-d6e0fae2d364.jpg?v=1747252987",
      likes: 0,
      comentarios: []
    },
    {
      nombre: "MIEL CLICK PARA TU CABELLO",
      descripcion: "Repara el cabello dañado,",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOlMRXQc27OMkB8JkWJXzEywS01yXS_SXRw&s",
      likes: 0,
      comentarios: []
    }
  ];

  productoDetalle: any = null;

toggleLike(producto: any, event: Event) {
  event.stopPropagation();
  producto.likes++;
}

  abrirComentarios(producto: any, event: Event) {
    event.stopPropagation();
    this.productoDetalle = producto;
  }

  verDetalle(producto: any) {
    this.productoDetalle = producto;
  }

  cerrarDetalle() {
    this.productoDetalle = null;
  }

  agregarComentario(producto: any, comentario: string) {
    if (comentario.trim()) {
      producto.comentarios.push(comentario.trim());
    }
  }
}
