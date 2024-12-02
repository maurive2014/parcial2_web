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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntity = exports.UserRole = void 0;
const bono_entity_1 = require("../bono/bono.entity");
const clase_entity_1 = require("../clase/clase.entity");
const typeorm_1 = require("typeorm");
var UserRole;
(function (UserRole) {
    UserRole["PROFESOR"] = "Profesor";
    UserRole["DECANA"] = "Decana";
})(UserRole || (exports.UserRole = UserRole = {}));
let UsuarioEntity = class UsuarioEntity {
};
exports.UsuarioEntity = UsuarioEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "grupodeinvestigacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "numeroextension", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: UserRole,
        default: UserRole.PROFESOR
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UsuarioEntity, usuario => usuario.subordinados),
    __metadata("design:type", UsuarioEntity)
], UsuarioEntity.prototype, "jefe", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UsuarioEntity, usuario => usuario.jefe),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "subordinados", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bono_entity_1.BonoEntity, bono => bono.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "bonos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => clase_entity_1.ClaseEntity, clase => clase.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "clases", void 0);
exports.UsuarioEntity = UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)()
], UsuarioEntity);
//# sourceMappingURL=usuario.entity.js.map