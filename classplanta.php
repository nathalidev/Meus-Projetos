<?php
class Planta {
    private $nomePopular;
    private $nomeCientifico;
    private $origem;
    private $tamanho;
    private $especie;
    private $idade;

    public function __construct($nomePopular, $nomeCientifico, $origem, $tamanho, $especie, $idade) {
        $this->nomePopular = $nomePopular;
        $this->nomeCientifico = $nomeCientifico;
        $this->origem = $origem;
        $this->tamanho = $tamanho;
        $this->especie = $especie;
        $this->idade = $idade;
    }

    public function getNomePopular() {
        return $this->nomePopular;
    }

    public function setNomePopular($nomePopular) {
        $this->nomePopular = $nomePopular;
    }

    public function getNomeCientifico() {
        return $this->nomeCientifico;
    }

    public function setNomeCientifico($nomeCientifico) {
        $this->nomeCientifico = $nomeCientifico;
    }

    public function getOrigem() {
        return $this->origem;
    }

    public function setOrigem($origem) {
        $this->origem = $origem;
    }

    public function getTamanho() {
        return $this->tamanho;
    }

    public function setTamanho($tamanho) {
        $this->tamanho = $tamanho;
    }

    public function getEspecie() {
        return $this->especie;
    }

    public function setEspecie($especie) {
        $this->especie = $especie;
    }

    public function getIdade() {
        return $this->idade;
    }

    public function setIdade($idade) {
        $this->idade = $idade;
    }

    public function calculaAgua() {
        $consumo = ($this->tamanho * 0.1) + ($this->idade * 0.05);
        return $consumo;
    }
}

// Exemplo de uso da classe Planta
$minhaPlanta = new Planta("Girassol", "Helianthus annuus", "Brasil", 1.5, "Angiosperma", 2);
echo "<pre>";
print_r($minhaPlanta);
echo "</pre>";
?>
