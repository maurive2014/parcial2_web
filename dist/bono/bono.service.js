"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_errors_1 = require("../shared/errors/business-errors");
const typeorm_2 = require("typeorm");
const bono_entity_1 = require("./bono.entity");
const usuario_entity_1 = require("../usuario/usuario.entity");
let BonoService = class BonoService {
    constructor(bonoRepository, usuarioRepository) {
        this.bonoRepository = bonoRepository;
        this.usuarioRepository = usuarioRepository;
    }
    async crearBono(bono) {
        if (!bono.monto || (bono.monto <= 0)) {
            throw new business_errors_1.BusinessLogicException("El monto está mal", business_errors_1.BusinessError.PRECONDITION_FAILED);
        }
        const usuario = await this.usuarioRepository.findOne({
            where: { id: bono.usuario.id },
        });
        if (!usuario) {
            throw new business_errors_1.BusinessLogicException('El usuario asociado al bono no existe.', business_errors_1.BusinessError.NOT_FOUND);
        }
        if (usuario.rol !== usuario_entity_1.UserRole.PROFESOR) {
            throw new business_errors_1.BusinessLogicException('Solo un usuario con rol de Profesor puede tener un bono.', business_errors_1.BusinessError.PRECONDITION_FAILED);
        }
        return await this.bonoRepository.save(bono);
    }
    async findBonoByCodigo(id) {
        const bono = await this.bonoRepository.findOne({ where: { id } });
        if (!bono)
            throw new business_errors_1.BusinessLogicException("The bono with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        return bono;
    }
    async findAllBonosByUsuario(userID) {
        const usuario = await this.usuarioRepository.findOne({
            where: { id: userID },
        });
        if (!usuario) {
            throw new business_errors_1.BusinessLogicException('El usuario con el ID dado no fue encontrado.', business_errors_1.BusinessError.NOT_FOUND);
        }
        return await this.bonoRepository.find({ where: { usuario: { id: userID } } });
    }
    async deleteBono(id) {
        const bono = await this.bonoRepository.findOne({ where: { id } });
        if (!bono)
            throw new business_errors_1.BusinessLogicException("The bono with the given id was not found", business_errors_1.BusinessError.NOT_FOUND);
        if (bono.calificacion > 4) {
            throw new business_errors_1.BusinessLogicException('No se puede eliminar un bono con una calificación mayor a 4.', business_errors_1.BusinessError.PRECONDITION_FAILED);
        }
        await this.bonoRepository.remove(bono);
    }
};
exports.BonoService = BonoService;
exports.BonoService = BonoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bono_entity_1.BonoEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BonoService);
//# sourceMappingURL=bono.service.js.map