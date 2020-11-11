 
 ===== >>> DropdownList
 
var cmbTesteIniciativa = null;

$(document).ready(function () {
    cmbTesteIniciativa = $("#cmbTesteIniciativa").kendoDropDownList({
        optionLabel: "Selecione o Teste",
        dataTextField: "descricao",
        dataValueField: "codigo",
        filter: "contains",
        dataSource: {
            schema: {
                data: "Data",
                model: {
                    id: "codigo"
                }
            },
            transport: {
                read: {
                    url: "../../adm/servicos/workflowServico.svc/RecuperarTipoIniciativaCombo",
                    contentType: "application/json; charset=utf-8",
                    dataType: "jsonp",
                    type: "POST"
                }
            }
        }
    }).data("kendoDropDownList");
});


<div class="form-group col-md-4">
    <label for="cmbTesteIniciativa">Teste Iniciativa:</label>
</div>
<div class="form-group col-md-8">
    <div class="div-campo">
        <input id="cmbTesteIniciativa" tabindex="2" type="text" name="_cmbTesteIniciativa" class="k-textbox" />
    </div>
    <div class="ajuda-textarea">
        <span title="Validação Formulário" class="k-invalid-msg" data-for="_cmbTesteIniciativa"></span>
    </div>
</div>
  
===== >>> Select

multiUsuarios = $("#multiUsuarios").kendoMultiSelect({
    optionLabel: pasLblSelectUsuarios,
    dataTextField: "descricao",
    dataValueField: "codigo",
    filter: "contains",
    height: 252,
    valueTemplate: $('#btn-templateUsuarioSelecionado').html(),
    dataBound: multiUsuarios_DataBound,
    dataSource: {
        schema: {
            data: "Data",
            model: {
                id: "codigo",
            }
        },
        transport: {
            read: {
                url: "../../adm/servicos/cadastrosServico.svc/RecuperarUsuariosCombo",
                contentType: "application/json; charset=utf-8",
                dataType: "jsonp",
                type: "POST"
            },
            parameterMap: function (data) {
                data.ativos = true;
                data.workflow = true;
                data.controleCodigo = controleCodigo;
                data.codigoRelacaoTabela = 4;
                return JSON.stringify(data);
            }
        }
    }
}).data("kendoMultiSelect");

multiUsuarios.input.on('keydown', function (e) { onKeyPress(e, 6); });

txtAno = $("#txtAno").kendoNumericTextBox({
    format: "####",
    decimals: 0,
    spinners: false
}).data("kendoNumericTextBox");