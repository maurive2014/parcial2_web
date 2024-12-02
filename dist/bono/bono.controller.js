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
exports.BonoController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const business_errors_interceptor_1 = require("../shared/interceptors/business-errors/business-errors.interceptor");
const bono_dto_1 = require("./bono.dto");
const bono_entity_1 = require("./bono.entity");
const bono_service_1 = require("./bono.service");
let BonoController = class BonoController {
    constructor(bonoService) {
        this.bonoService = bonoService;
    }
    async crearBono(bonoDto) {
        const bono = (0, class_transformer_1.plainToInstance)(bono_entity_1.BonoEntity, bonoDto);
        return await this.bonoService.crearBono(bono);
    }
    async findBonoByCodigo(cod) {
        return await this.bonoService.findBonoByCodigo(cod);
    }
    async findAllBonosByUsuario(userID) {
        return await this.bonoService.findAllBonosByUsuario(userID);
    }
    async deleteBono(id) {
        return await this.bonoService.deleteBono(id);
    }
};
exports.BonoController = BonoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bono_dto_1.BonoDto]),
    __metadata("design:returntype", Promise)
], BonoController.prototype, "crearBono", null);
__decorate([
    (0, common_1.Get)(':cod'),
    __param(0, (0, common_1.Param)('cod')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BonoController.prototype, "findBonoByCodigo", null);
__decorate([
    (0, common_1.Get)('usuario/:userID'),
    __param(0, (0, common_1.Param)('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BonoController.prototype, "findAllBonosByUsuario", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BonoController.prototype, "deleteBono", null);
exports.BonoController = BonoController = __decorate([
    (0, common_1.Controller)('bonos'),
    (0, common_1.UseInterceptors)(business_errors_interceptor_1.BusinessErrorsInterceptor),
    __metadata("design:paramtypes", [bono_service_1.BonoService])
], BonoController);
//# sourceMappingURL=bono.controller.js.map