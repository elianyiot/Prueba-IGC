import { Component, OnInit } from '@angular/core';
import { MachineService } from '../../shared/services/machine.service';
import { Machine } from '../../shared/interface/machine.interface';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  machines: Machine[] = [];
  estadoSeleccionado = 'Todos';

  constructor(private machineService: MachineService) {}

  ngOnInit(): void {
    this.machineService.getMachines().subscribe(data => {
      this.machines = data;
    });
  }

  get filteredMachines(): Machine[] {
    if (this.estadoSeleccionado === 'Todos') {
      return this.machines;
    }
    return this.machines.filter(machine => machine.status === this.estadoSeleccionado);
  }

  get machineChunks(): Machine[][] {
    return this.chunkArray(this.filteredMachines, 4); 
  }

  chunkArray<T>(arr: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  cambiarEstado(estado: string): void {
    this.estadoSeleccionado = estado;
  }
}
