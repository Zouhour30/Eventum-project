<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220216234847 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE produit (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) DEFAULT NULL, desciption VARCHAR(255) DEFAULT NULL, prix DOUBLE PRECISION DEFAULT NULL, stock INT DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produit_commande (produit_id INT NOT NULL, commande_id INT NOT NULL, INDEX IDX_47F5946EF347EFB (produit_id), INDEX IDX_47F5946E82EA2E54 (commande_id), PRIMARY KEY(produit_id, commande_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE produit_commande ADD CONSTRAINT FK_47F5946EF347EFB FOREIGN KEY (produit_id) REFERENCES produit (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE produit_commande ADD CONSTRAINT FK_47F5946E82EA2E54 FOREIGN KEY (commande_id) REFERENCES commande (id) ON DELETE CASCADE');
        $this->addSql('DROP INDEX UNIQ_6EEAA67DF347EFB ON commande');
        $this->addSql('ALTER TABLE commande ADD nomutilisateur VARCHAR(255) DEFAULT NULL, ADD adress VARCHAR(255) DEFAULT NULL, ADD nbproduit INT DEFAULT NULL, ADD date DATE DEFAULT NULL, ADD prixtotale DOUBLE PRECISION DEFAULT NULL, CHANGE produit_id tel INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE produit_commande DROP FOREIGN KEY FK_47F5946EF347EFB');
        $this->addSql('DROP TABLE produit');
        $this->addSql('DROP TABLE produit_commande');
        $this->addSql('ALTER TABLE commande ADD produit_id INT DEFAULT NULL, DROP nomutilisateur, DROP tel, DROP adress, DROP nbproduit, DROP date, DROP prixtotale');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6EEAA67DF347EFB ON commande (produit_id)');
    }
}
